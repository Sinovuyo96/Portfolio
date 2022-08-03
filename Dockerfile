FROM node

# Create app directory
WORKDIR /usr/src/portfolio

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
# COPY App.js /var/www/html
# COPY Index.js /var/www/html
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .


# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
ADD . .

EXPOSE 8080
CMD ["npm", "start"]
