# Toolbox Full Stack Challenge
This repository contains the solution for the Full Stack Challenge.
It includes a Node.js/Express API that processes external CSV data and a React-based client that consumes and displays the parsed content:

## Tech Stack Backend
- **Javascript**
- **Node.js 14 + Express**
- **Swagger UI** (for documentation)
- **Mocha** (integration tests for HTTP routes)
- **Chai** (integration assertions for API responses)
- **JavaScript Standard Style** (lint to follow JS standard rules)
- **Docker** and **Docker Compose** (for local development)

## Tech Stack Frontend
- **Javascript**
- **React 18**
- **React Bootstrap** (for design)
- **Redux Toolkit** (global state manager)
- **Webpack** (module bundler for asset optimization and development tooling)
- **Jest** (unit and integration test)
- **Docker with Node 16** and **Docker Compose** (for local development)

## Local Deployment with Docker Compose

1. Clone the repository
```bash
git clone https://github.com/andrucar25/toolbox-fullstack-app
```
2. Run the application
```bash
docker compose up --build
```
3. Try the application in a browser with the url
+ Access the application at:
http://localhost:3000

## Manual Local Deployment without Docker Compose

1. Clone the repository 
```bash
git clone https://github.com/andrucar25/toolbox-fullstack-app
```
2. Install dependencies inside backend and run
```bash
cd backend
npm install
npm start
```
3. Install dependencies inside frontend and try it on a browser
```bash
cd frontend
npm install
npm start
```
4. Try the application in a browser with the url
+ Access the application at:
http://localhost:3000

## Try testing the application
### Backend
```bash
cd backend
npm test
```

### Frontend
```bash
cd frontend
npm test
```

## Check Backend Documentation
To access the Full Documentation and endpoints, the backend application must be running by any of the methods (with or without Docker Compose).
Then visit http://localhost:4000/api-docs
