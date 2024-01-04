FROM node:latest

WORKDIR /app

COPY package.json ./

RUN npm install --force

COPY . .


RUN npm run build --force

EXPOSE 4200

CMD [ "npm", "start" ]
