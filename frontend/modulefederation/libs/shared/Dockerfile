FROM node:latest as node
WORKDIR /app
COPY . .


# RUN npm install -g @nrwl/cli
# RUN npm install --force
# RUN npx nx build frontend --configuration=production
# RUN pwd && ls

#stage 2
FROM nginx:alpine
COPY ./libs/shared/nginx.conf /etc/nginx/nginx.conf
COPY --from=node app/dist/libs/shared /usr/share/nginx/html