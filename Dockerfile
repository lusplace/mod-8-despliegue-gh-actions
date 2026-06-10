FROM node

ARG NODE_ENV=develop
ENV NODE_ENV=$NODE_ENV
ARG PORT=4321
ENV PORT=$PORT

WORKDIR /app
EXPOSE $PORT
COPY package.json /app
RUN npm install
COPY . /app
ENTRYPOINT ["node"]
CMD ["app.js"]