FROM node:20-alpine

RUN apk add --no-cache git

WORKDIR /app

COPY . .

EXPOSE 8080

CMD ["node", "scripts/static-supervisor.js"]
