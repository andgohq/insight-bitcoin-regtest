'use strict';

const schedule = require('node-schedule');
const exec = require('child_process').exec;
const express = require('express');
const app = new express();

const AUTH = '-rpcuser=bitcoin -rpcpassword=password123';

schedule.scheduleJob('*/5 * * * * *', function() {
  exec(`bitcoin-cli -regtest ${AUTH} generate 1`, (err, stdout, stderr) => {
    if (err) { console.log(err); }
    console.log(stdout);
  });
});

app.get('/faucet/:address', (req, res) => {
  const address = req.params.address;
  const amount = req.query.amount || 0;

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

app.listen(3000, () => {
    console.log('Faucet server up!');
});

// run bitcore server
// reference: https://github.com/bitpay/bitcore/blob/master/bin/bitcored
var path = require('path');
var bitcored = require('bitcore-node/lib/cli/bitcored');
var servicesPath = path.resolve(__dirname, '../');
var additionalServices = ['insight-api', 'insight-ui'];
bitcored(servicesPath, additionalServices);
