FROM node:20-bullseye

RUN apt-get update && apt-get install -y \
    git \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Herramientas exclusivas de backend
RUN npm install --save-dev \
    typescript \
    ts-node \
    nodemon \
    express-generator

WORKDIR /workspace

USER node
