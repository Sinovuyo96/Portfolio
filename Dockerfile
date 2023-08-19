FROM node:16.3.0-alpine

# Create app directory
WORKDIR /usr/src/portfolio

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
# COPY Index.js /var/www/html
COPY package*.json ../
ADD package.json /usr/src/app/package.json
# RUN npm install react-scripts@3.4.3 -g --silent

RUN npm install --package-lock-only
RUN npm install
# RUN curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.0/install.sh | bash
RUN . ~/.nvm/nvm.sh
# RUN nvm install 15.0.0
RUN node -e "console.log('Running Node.js ' + process.version)"
RUN npm init -y
RUN npm install express
# RUN npm install @emailjs/browser --save
# RUN npm install
# RUN curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
# RUN nvm install 16.16.0

# ENTRYPOINT ["docker-entrypoint.sh"]

# Bundle app source
COPY . .
ADD . .

CMD ["npm", "start"]
