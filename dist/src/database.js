"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
const config_1 = require("../config");
const mongoose_1 = __importDefault(require("mongoose"));
const connectMongoose = () => {
    mongoose_1.default.connect(`mongodb+srv://${config_1.config.database.username}:${config_1.config.database.password}@cluster0.cf2wr.mongodb.net/${config_1.config.database.name}?retryWrites=true&w=majority`);
    const db = mongoose_1.default.connection;
    db.on("error", console.error.bind(console, "connection error: "));
    db.once("open", function () {
        console.log("Connected successfully");
    });
};
exports.Database = {
    connectMongoose
};
//# sourceMappingURL=database.js.map