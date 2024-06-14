# which opreation system and node version we shell use...
FROM node:18-alpine

#Create Application directory (destination)
WORKDIR /usr/src/app

#Install application dependencies (node_modules)
COPY package.json ./

#Run the commands for proper installtion
#update npm version
RUN npm install -g npm@10.8.1

#run npm install for install all dependencies into node_modules directory
RUN npm install 

#install nodemon as global service
RUN npm install -g nodemon

#install ts-node as global service
RUN npm install -g ts-node

#copy all files from source to destination where . is current directory
COPY . .

#which port we want to expose
EXPOSE 8080

CMD ["nodemon","--exec", "ts-node","server.ts"]

#for bulding the docker, just run the command => docker build . -t cars-api
#for running the docker, just run the command => docker run -p 5050:8080 cars-api
#push the image to docker hub, so we can use it anywhere in the world :
#docker push mindalizeev/cars-api:latest      