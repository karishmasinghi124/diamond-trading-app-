# Diamond Trading App

## Setup
npm install
npm start

Runs on:
http://localhost:5000

## Endpoints
/health → OK
/api/test → JSON

## Docker
docker build -t diamond-app .
docker run -p 5000:5000 diamond-app

## CI/CD
GitHub Actions pipeline runs on push to main
