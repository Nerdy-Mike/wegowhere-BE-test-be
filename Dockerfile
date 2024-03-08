FROM node:18.2.0-alpine3.14

WORKDIR /app

COPY package*.json ./

RUN npm install 

COPY . .

RUN npm run build

EXPOSE 3001 8001

CMD ["node", "dist/main"]