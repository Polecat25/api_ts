FROM  node:alpine3.17

WORKDIR /src
COPY . .
RUN npm install
RUN npm i typescript -g
RUN npm run build

EXPOSE 3002

CMD [ "npm", "run", "start" ]

