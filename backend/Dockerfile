# Use Node.js 14 in Alpine 
FROM node:14-alpine

# Work directory inside container
WORKDIR /usr/src/app

#Copy necesary files to install dependencies
COPY package*.json ./

# Install only production dependencies
RUN npm ci --only=production

# Copy rest of code
COPY . .

# Expose port 3000
EXPOSE 3000

# Initialize app
CMD ["npm", "start"]
