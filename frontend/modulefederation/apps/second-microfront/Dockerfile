FROM node:latest as node
WORKDIR /app
COPY . .


RUN npm install -g @nrwl/cli
RUN npm install --force
RUN npx nx build second-microfront 
#--configuration=production
#RUN pwd && ls

#stage 2
FROM nginx:alpine
COPY ./apps/second-microfront/nginx.conf /etc/nginx/nginx.conf
COPY --from=node app/dist/apps/second-microfront /usr/share/nginx/html