# Node.js 16 in Alpine 
FROM node:16-alpine

# Work directory inside container
WORKDIR /app

#Copy necesary files to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of code
COPY . .

# Expose port 3000
EXPOSE 3000

# Initialize app
CMD ["npm", "start"]
