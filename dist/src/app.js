"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// First part of the code. Here is where all routes are called and the main import made
// Main imports
const express_1 = __importDefault(require("express")); // Express is the package that effectively creates the server
const body_parser_1 = __importDefault(require("body-parser")); // Body-parser is used for reading the requests that come from outside
const database_1 = require("./database");
const dotenv = require('dotenv');
dotenv.config(); // This calls the variables in the .env file
const app = (0, express_1.default)(); // This lime of code creates the server itself
// The next 2 lines invoke the body-parser package
app.use(express_1.default.json());
app.use(body_parser_1.default.json());
database_1.Database.connectMongoose();
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Pass to next layer of middleware
    next();
});
app.get('/', (req, res) => console.log('App is working')); // Accessing the server without a extension will create a log with "App is working"
app.use('/api', require('./routes/index')); // We access the routes from the folder routes as the extension "/api"
const port = process.env.PORT || 80;
app.listen(port, () => console.log(`App listening to Port ${port}`)); // Using express to start the server we created on line 7
module.exports = {
    app
};
//# sourceMappingURL=app.js.map