# Bitcoin Regtest with Insight and Faucet API

This is forked from https://github.com/andgohq/insight-bitcoin-regtest.

* New blocks are mined automatically every 20 seconds
* Insight API & UI: port 3001
* Faucet API: port 3000

# Usage

Following commands are enabled under the root dir of the project.

* build: `docker-compose build`
* start daemon: `docker-compose up -d`
* stop & remove daemon: `docker-compose down`
* list process: `docker-compose ps`
* login to the server: `docker-compose exec btcserver bash`
* run command: `docker-compose exec btcserver [command]`

`docker run -it -p 3001:3001 andgo/insight-bitcoin-regtest:latest`

# Insight API example

`curl http://localhost:3001/api/addr/mnJQyeDFmGjNoxyxKQC6MMFdpx77rYV3Bo/balance`

# Faucet API example

`curl http://localhost:3000/faucet/mnJQyeDFmGjNoxyxKQC6MMFdpx77rYV3Bo?amount=10`

# Wallet Private Keys
The private keys are based on a mnemonic phrase by default. For ease of use, use these private keys while interacting with your application.
```
            ADDRESS                |                     PRIVATE KEY

mnJQyeDFmGjNoxyxKQC6MMFdpx77rYV3Bo | cVVGgzVgcc5S3owCskoneK8R1BNGkBveiEcGDaxu8RRDvFcaQaSG
mzdF3oEx8mKrpGb5rVnTE7MhQfL8N8oSnW | cRGkipHiYFRSAgdY9NjUT7egHTuNXoKYWQea3kWVbkSJAs4VDi8r
mtdVMhiWWmegkkBhzYDrz84yfgofPNLNmb | cTc8XCQZuSt5E1LArqCxyaXhn1cQkvcBMAGQ159raPSQTuBpHWdi
mqNnZTyFxhB6EzF1iDEAp9enrT84fwd1X5 | cQ9JwsoYHC2Md41uDbczDVpsuWAeYjDDrDiGbCBZ4stZhZvLZWj8
mnk2URqujBqMEfhALMby1WZHoBRauW37Kg | cQrY4VypAuemJtHmNNJLyx1SNjY7mpfkdQEJpccpLSvan5YoMAkM
```
Mnemonic phrase: `myth like bonus scare over problem client lizard pioneer submit female collect`
