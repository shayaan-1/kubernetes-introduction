FROM node:18
WORKDIR /app
COPY . .
CMD ["node", "app/app.js"]
EXPOSE 8080
