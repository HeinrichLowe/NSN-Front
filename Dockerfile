# syntax=docker/dockerfile:1

FROM node:23-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

ARG NEXT_PUBLIC_SERVER_URL
ENV NEXT_PUBLIC_SERVER_URL=$NEXT_PUBLIC_SERVER_URL

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
