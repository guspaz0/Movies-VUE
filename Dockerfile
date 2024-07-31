FROM node:20-alpine

WORKDIR /usr/code

COPY ["package.json", "vite.config.ts","index.html","tsconfig.app.json","tsconfig.json","tsconfig.node.json", "/usr/code/"]

RUN npm install

EXPOSE 8081