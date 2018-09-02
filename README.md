# Bitcoin Regtest with Insight and Faucet API

* New blocks are mined automatically every 20 seconds
* Insight UI: http://localhost:3000/
* Insight API: http://localhost:3000/api/
* Faucet API: http://localhost:3000/faucet/

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

`curl http://localhost:3000/api/addr/mnJQyeDFmGjNoxyxKQC6MMFdpx77rYV3Bo/balance`

# Faucet API example

`curl -d "amount=10"  http://localhost:3000/faucet/mnJQyeDFmGjNoxyxKQC6MMFdpx77rYV3Bo`

# Note

This is forked from https://github.com/hunterlong/btcregtest-insight.
