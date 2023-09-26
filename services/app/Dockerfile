# Step 1: Build the application
FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY lib/ lib/
COPY src/ src/
COPY tsconfig.json ./
COPY node_modules/ node_modules/
COPY vite.config.ts ./
COPY index.html ./

RUN yarn run build

# Step 2: Set up the production environment
FROM caddy:2.4.5-alpine
RUN apk --no-cache add curl 
COPY --from=builder /app/dist /site/
COPY ./Caddyfile /etc/caddy/Caddyfile

EXPOSE 8080
