#!/usr/bin/env bash
docker-compose exec btcserver bitcoin-cli -regtest "$@"
