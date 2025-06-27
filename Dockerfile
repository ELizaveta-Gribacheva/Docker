FROM node:20

WORKDIR /app

COPY package.json tsconfig.json ./
COPY main.ts test.ts ./

RUN npm install
RUN npm run test

CMD ["npm", "run", "test"]