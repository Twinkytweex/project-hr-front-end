# Use the Node.js image to build the application
FROM node:lts-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the working directory
COPY . .

# Expose port 8080 to the host
EXPOSE 8080

# Run the development server
CMD ["npm", "run", "serve"]