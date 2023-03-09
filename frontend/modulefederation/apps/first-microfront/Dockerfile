FROM node:latest as node
WORKDIR /app
COPY . .


RUN npm install -g @nrwl/cli
RUN npm install --force
RUN npx nx build first-microfront 
#--configuration=production
#RUN pwd && ls

#stage 2
FROM nginx:alpine
COPY ./apps/first-microfront/nginx.conf /etc/nginx/nginx.conf
COPY --from=node app/dist/apps/first-microfront /usr/share/nginx/html