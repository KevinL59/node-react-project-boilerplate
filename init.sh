#!/bin/bash

echo '-- Init test birdie project --'

echo '-- Configuring api --'

cd services/api/
npm install
npm run test

echo '-- Configuring api DONE --'

cd ../..

echo '-- Configuring frontend --'

cd services/frontend/
npm install
npm run test
npm run build-dev

echo '-- Configuring frontend DONE --'

cd ../..

echo '-- Launching docker-compose --'

docker-compose up -d --build

echo '-- Project is ready. Go to http://localhost:4200/ to see the project ;) --'