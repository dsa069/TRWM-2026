FROM node:20-bullseye

RUN apt-get update && apt-get install -y \
    git \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Herramientas exclusivas de frontend Angular
RUN npm install -g \
    @angular/cli@17 \
    typescript

WORKDIR /workspace/client

USER node
