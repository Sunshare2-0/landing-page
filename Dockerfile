# Step 1: Build React app
FROM node:18 AS build
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build

# Step 2: Serve using `serve`
FROM node:18-alpine
WORKDIR /app

# Install serve globally
RUN yarn global add serve

# Copy build output from previous stage
COPY --from=build /app/build ./build

# Use the `PORT` environment variable provided by Railway
ENV PORT 3000
EXPOSE 3000

# Start the app with serve
CMD ["serve", "-s", "build", "-l", "3000"]