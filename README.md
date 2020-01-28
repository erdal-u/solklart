# Soltak service portal prototyp

## Getting Started

To start prototype locally run "make dev"

For frontend development run "npm start" in fronend folder

For backend development run "npm run debug" in backend folder

### Prerequisites

To run prototype locally you need docker

To develop prototype you need node and npm

## Deployment

Can either be deployed using docker images or deployed on a system whit node

For simple deployment run "make pack" and use scp to copy local image to server "scp ./soltak.tar <remote url>:<path>".

Then unpack docker image on server "docker load -i <path>" and start it exposing port 80 and 443 to local docker port 8080 "docker run -d -p 80:8080 -p 443:8080 --name soltak soltak"

### Environment variables

* API_KEY - vision flow api key
* HTTP_PORT - port to start server on, defaults to 8080
* VISIONFLOW_USER - username to use in auth with visionflow
* VISIONFLOW_PASSWORD - password for said user

## Built With

* [Typescript](https://www.typescriptlang.org/) - Typed superset of javascript

### Backend
* [Koa js](https://koajs.com/) - Simple asynchronous http middleware library
* [Npm](https://www.npmjs.com/) - Dependency Management

### Frontend
* [React](https://reactjs.org/) - Library to build user interfaces
* [Mobx](https://mobx.js.org/README.html) - Library for state management
* [FuseBox](https://fuse-box.org/) - Typescript bundler

### Fronend

## Authors

* **Karl persson**