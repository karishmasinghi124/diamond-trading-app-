# DevOps Practical Assignment

## Overview
This project demonstrates a Node.js application containerized using Docker and deployed using CI/CD with GitHub Actions.

## Features
- Express-based Node.js application
- Health endpoint: /health
- Test endpoint: /api/test
- Environment variable support
- Docker containerization
- CI/CD pipeline using GitHub Actions

## Project Structure
- src/ → Application code
- Dockerfile → Container setup
- ci.yml → CI/CD pipeline

## Setup Instructions

### Run Locally
npm install
npm start

### Run with Docker
docker build -t diamond-app .
docker run -p 5000:5000 diamond-app

## CI/CD Pipeline
- Trigger: Push to main branch
- Steps:
  - Install dependencies
  - Run application
  - Test /health endpoint
  - Build Docker image

## Environment Variables
PORT=5000
NODE_ENV=production

## Deployment
Deployed using Render (or AWS EC2)

## Approach
- Modular structure (routes, controllers)
- Secure config using environment variables
- Automated build & test pipeline
- Containerized deployment for consistency
