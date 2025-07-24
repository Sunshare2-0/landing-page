# Build stage
FROM node:18 AS builder
WORKDIR /app

# Copy dependency files first
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy all project files
COPY . .

# Disable CI mode to prevent eslint warnings from failing build
ENV CI=false

# Build the React app
RUN yarn run build

# Serve with nginx
FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]