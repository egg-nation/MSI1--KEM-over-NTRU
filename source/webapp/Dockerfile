FROM node:slim

WORKDIR /work

COPY ["package.json", "package-lock.json*", "./"]
RUN npm install

COPY . .

CMD ["npm", "start"]
