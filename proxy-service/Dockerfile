FROM node

RUN mkdir -p /service

COPY . ./service

WORKDIR /service

RUN npm install

EXPOSE $PORT

CMD PORT=$PORT npm run docker:deploy
