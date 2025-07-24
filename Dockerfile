# Base image with Node.js
FROM node:18 AS build

# Set working directory inside container
WORKDIR /app

# Copy package files and install dependencies
COPY package.json yarn.lock ./
RUN yarn install

# Copy the rest of the project files
COPY . .

# Build the React app for production
RUN yarn build

# -----------------------------

# Stage 2: Serve with a lightweight web server
FROM nginx:alpine

# Remove default nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy built React app to nginx folder
COPY --from=build /app/build /usr/share/nginx/html

# Copy custom nginx config (optional)
# COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80 for Railway
EXPOSE 80

# Start nginx server
CMD ["nginx", "-g", "daemon off;"]
