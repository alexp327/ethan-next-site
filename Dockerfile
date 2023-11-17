FROM node:18-alpine3.18

WORKDIR /src

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]