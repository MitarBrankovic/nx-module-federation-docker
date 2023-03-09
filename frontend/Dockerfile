FROM node:latest as node
WORKDIR /app
COPY . .


RUN npm install -g @nrwl/cli
RUN npm install --force
RUN npx nx build modulefederation --configuration=production
RUN pwd && ls

#stage 2
FROM nginx:alpine
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY --from=node app/dist/modulefederation /usr/share/nginx/html