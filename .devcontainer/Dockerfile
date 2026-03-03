FROM node:20-bullseye

# Instalar dependencias del sistema
RUN apt-get update && apt-get install -y \
    git \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Instalar Angular CLI y TypeScript globalmente
RUN npm install -g \
    @angular/cli@17 \
    typescript \
    ts-node \
    nodemon \
    express-generator

# Crear directorio de trabajo
WORKDIR /workspace

# Cambiar al usuario node
USER node