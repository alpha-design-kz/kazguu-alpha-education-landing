# https://v2.vuejs.org/v2/cookbook/dockerize-vuejs-app.html
# sudo docker stop $(sudo docker ps -q --filter ancestor=kazguu-alpha-education-landing)
# sudo docker build -t kazguu-alpha-education-landing .
# sudo docker run -dp 3080:80 --env-file ./.env kazguu-alpha-education-landing 
# sudo docker run -dp 8538:80 --env-file ./.env kazguu-alpha-education-landing 
# sudo docker exec -ti $(sudo docker ps -q --filter ancestor=kazguu-alpha-education-landing) sh

# build stage
FROM --platform=linux/amd64 node:14-alpine as build-stage
WORKDIR /app
COPY package*.json yarn*.lock ./
RUN yarn install
COPY . .
RUN yarn build

# production stage
FROM --platform=linux/amd64 nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist/public /usr/share/nginx/html
# COPY .docker-config/nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
