# Base image
FROM alpine:3.4

# Author
LABEL author="Samy Amraoui <sametzy@gmail.com>"

# Install required packages
RUN apk add --update bash git nodejs

# Copy app source
COPY package.json /www/package.json
COPY src /www/src
COPY .babelrc /www/.babelrc

# Set work directory to /www
WORKDIR /www

# Install package.json dependencies
RUN npm install

# Set and expose port
ENV PORT 8080
EXPOSE 8080

# Start app server
CMD ["npm", "start"]