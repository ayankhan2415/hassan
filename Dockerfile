########################## Stage 1: #######################################
# Build the application
FROM node:16-alpine AS builder
# Set the working directory inside the container
WORKDIR /usr/src/app
# Copy the package.json and yarn.lock files to the container
COPY package.json yarn.lock ./
# Install app dependencies
RUN yarn install
# Copy the rest of the application code to the container
COPY . .
# Build the Next.js app for production
RUN yarn run build

########################## Stage 2: #######################################
# Create the production image
FROM node:16-alpine
# Set the working directory for the production stage
WORKDIR /usr/src/app
# Copy the production build from the builder stage
COPY --from=builder /usr/src/app .
# Expose the port that the Next.js app will run on
EXPOSE 3000
# Define the command to start the application
CMD ["yarn", "start"]

