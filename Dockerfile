FROM node:14-alpine

# Set node environment to production
ENV NODE_ENV production

# Update the system
RUN apk --no-cache -U upgrade

WORKDIR /usr/src/app

# Copy package.json and package-lock.json to WORKDIR
COPY package*.json ./

# Install all dependencies
RUN npm install --only=production

# Copy the rest of the code
COPY --chown=node:node . .

RUN touch /usr/src/app/swagger-output.json

# Switch to non-root user
USER node

# Open desired port
EXPOSE 3000

# Run the application
CMD ["node", "/usr/src/app/src/swagger.js"]
