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
const projects_1 = require("../models/projects");
const router = express_1.default.Router(); // Configuring this file as a router (manager of the URL extensions)
router.post("/save", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const project = new projects_1.Project(req.body);
    try {
        yield project.save();
        res.json(project);
    }
    catch (error) {
        res.status(500).send(error);
    }
}));
router.get("/list", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const projects = yield projects_1.Project.find({});
    try {
        res.json(projects);
    }
    catch (error) {
        res.status(500).send(error);
    }
}));
module.exports = router;
//# sourceMappingURL=projects.js.map