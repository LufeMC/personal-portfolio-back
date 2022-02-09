"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Main imports
const express_1 = __importDefault(require("express"));
const request_1 = require("../models/request");
const router = express_1.default.Router(); // Configuring this file as a router (manager of the URL extensions)
const mailer_1 = require("../mailer");
router.post("/save", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const request = new request_1.Request(req.body);
    try {
        yield request.save();
        res.json(request);
    }
    catch (error) {
        res.status(500).send(error);
    }
}));
router.post("/sendEmail", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const request = req.body;
    try {
        const email = yield mailer_1.mailer.sendEmail(`New request from ${request.name}`, `You received a new request!\n\n
      ${request.name} whose email is ${request.email} has made a new request.\n\n
      They want you to to the following:\n${request.details}\n\n
      They have ${request.budget} and need the project until ${request.deadline}`);
        res.json(email);
    }
    catch (error) {
        res.status(500).send(error);
    }
}));
module.exports = router;
//# sourceMappingURL=requests.js.map