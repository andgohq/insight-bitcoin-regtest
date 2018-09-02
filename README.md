# Bitcoin Regtest with Insight and Faucet API

This is forked from https://github.com/andgohq/insight-bitcoin-regtest.

* New blocks are mined automatically every 20 seconds
* Insight API & UI: port 3001
* Faucet API: port 3000

# Requirement
* docker & docker-compose

# Usage

Following commands are enabled under the root dir of the project.

* build: `docker-compose build`
* start daemon: `docker-compose up -d`
* stop & remove daemon: `docker-compose down`
* list process: `docker-compose ps`
* login to the server: `docker-compose exec btcserver bash`
* run command: `docker-compose exec btcserver [command]`

# Insight API example

`curl http://localhost:3001/api/addr/mnJQyeDFmGjNoxyxKQC6MMFdpx77rYV3Bo/balance`

# Faucet API example

`curl -X POST http://localhost:3000/faucet/mnJQyeDFmGjNoxyxKQC6MMFdpx77rYV3Bo?amount=10`
