FROM node

RUN mkdir -p /service

COPY . ./service

WORKDIR /service

RUN npm install

EXPOSE $PORT

CMD ['./wait-for-it.sh', 'http://$REGISTRY_HOST:$REGISTRY_PORT', '--timeout=1 --strict -- echo "proxy is up"']

CMD PORT=$PORT npm run docker:deploy
