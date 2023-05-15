# Base image
FROM node:16.14.1-alpine3.14

# Set the working directory
WORKDIR /http-client

# Install yarn
RUN apk add --no-cache curl && \
    curl -o- -L https://yarnpkg.com/install.sh | sh -s -- && \
    apk del curl && \
    export PATH="$HOME/.yarn/bin:$HOME/.config/yarn/global/node_modules/.bin:$PATH"

# Install app dependencies
COPY package*.json ./
RUN yarn install

# Copy app files
COPY . .

# Expose the port
EXPOSE 3000

# Run the app
CMD ["yarn", "start"]