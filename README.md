# node-react-project-boilerplate
Boilerplate for a react.js and node.js application

## Project structure

The project is build in two services:  frontend and api. You can find the api project under `services/api`. For the frontend project, you can find it under `services/frontend`.

## Start the project

There is two way to start the project. If you have Docker-Compose installed, you can use the `init.sh` script:
`sudo chmod 775 init.sh && ./init.sh`

This script will install all dependencies to run the two projects, run the tests, and start two docker containers for each project. After that, go to localhost:4200/ to see the project.

If you don't have docker-compose install on your workspace, execute the following command:
```
cd services/api/
npm install
npm run test #optional, only if you want to run the test.
npm start

cd ../..

cd services/frontend/
npm install
npm run test
npm run start
```

The project is now ready on http://localhost:4200/

## Deployment on Heroku

You will need to have a heroku account to deploy by your own. The following command permit to start the two services:
```
heroku container:login
cd services/api/
heroku create <name-of-your-app>
heroku container:push web -a <name-of-your-app>
heroku container:release web -a <name-of-your-app>

cd ../..

cd services/frontend/
heroku create <name-of-your-second-app>
heroku container:push web -a <name-of-your-second-app>
heroku container:release web -a <name-of-your-second-app>
```
