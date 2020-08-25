FROM node as builder

WORKDIR /app/api

COPY package*.json ./
COPY tsconfig*.json ./


RUN apt-get update 
RUN apt-get install -y build-essential 
RUN apt-get install -y python

RUN npm install --silent

COPY . .

RUN npm run build



FROM node

WORKDIR /app/api

COPY package*.json ./

RUN npm install 

COPY --from=builder /app/api/dist ./dist

EXPOSE 5050

CMD ["npm","start"]