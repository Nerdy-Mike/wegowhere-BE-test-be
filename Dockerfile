FROM node:18.2.0-alpine3.14

WORKDIR /usr/src

COPY package*.json ./

RUN npm install 

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["node", "dist/main"]