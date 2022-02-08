// Main imports
const dotenv = require('dotenv');
dotenv.config(); // This calls the variables in the .env file

// Object that divides the variables in the .env file in categories
export const config = {
    database: {
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        name: process.env.DATABASE_NAME
    }
}