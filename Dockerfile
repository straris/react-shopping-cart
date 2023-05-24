FROM node:14

WORKDIR /src

COPY package*.json ./

RUN npm install

COPY . .

RUN npx cypress verify

CMD [ "npm", "start" ]
