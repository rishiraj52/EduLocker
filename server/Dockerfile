FROM node:14-alpine

RUN mkdir -p /home/app

COPY . /home/app

WORKDIR /home/app

RUN npm install --only=prod

EXPOSE 5000

CMD ["npm","start"]