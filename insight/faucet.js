'use strict';

const AUTH = '-rpcuser=bitcoin -rpcpassword=password123';
const UPDATE_INTERVAL_SEC = 20;
const PORT_FAUCET = 3000;
const PORT_INSIGHT = 3001;

const schedule = require('node-schedule');
const exec = require('child_process').exec;
const express = require('express');
var bodyParser = require('body-parser');
const app = new express();

schedule.scheduleJob(`*/${UPDATE_INTERVAL_SEC} * * * * *`, function() {
  exec(`bitcoin-cli -regtest ${AUTH} generate 1`, (err, stdout, stderr) => {
    if (err) { console.log(err); }
    console.log(stdout);
  });
});

app.post('/faucet/:address', (req, res) => {
  const address = req.params.address;
  const amount = req.body.amount || 0;

  if (!amount) {
    res.status(500).send({ error: 'Wrong Amount', body: req.body });
    return;
  }

  if (!address) {
    res.status(500).send({ error: 'Wrong Address' });
  } else {
    console.log(`send ${amount} to ${address}`);

    const cmd = `sendmany "" '{"${address}":${amount}}'`;

    exec(`bitcoin-cli -regtest ${cmd}`, (err, stdout, stderr) => {
      if (err) { console.log(err); }
      console.log(stdout);
    });

    res.send({ message: 'ok' });
  }
});

app.listen(PORT_FAUCET, () => {
    console.log('Faucet server up!');
});

// proxy
var proxy = require('http-proxy-middleware');
var options = {
  target: `http://localhost:${PORT_INSIGHT}`,
  changeOrigin: true,
  router: {
    [`localhost:${PORT_FAUCET}`]: `http://localhost:${PORT_INSIGHT}`,  // insight ui
    [`localhost:${PORT_FAUCET}/api`]: `http://localhost:${PORT_INSIGHT}/api`  // insight api
  }
};
app.use('/', proxy(options));

// Node: The http-proxy-middleware should be above the body-parser https://github.com/chimurai/http-proxy-middleware/issues/40
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// run bitcore server
// reference: https://github.com/bitpay/bitcore/blob/master/bin/bitcored
var path = require('path');
var bitcored = require('bitcore-node/lib/cli/bitcored');
var servicesPath = path.resolve(__dirname, '../');
var additionalServices = ['insight-api', 'insight-ui'];
bitcored(servicesPath, additionalServices);
