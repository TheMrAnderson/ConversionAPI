FROM node:21.7.2-bookworm-slim

# Set node environment to production
ENV NODE_ENV production
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --only=production
COPY --chown=node:node . .
EXPOSE ${PORT}

HEALTHCHECK --interval=30s --timeout=2s --start-period=5s CMD node /usr/src/app/src/healthcheck.js

CMD ["node", "/usr/src/app/src/swagger.js"]
