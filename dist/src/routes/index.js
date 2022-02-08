"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Main imports
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router(); // Configuring this file as a router (manager of the URL extensions)
router.use('/projects', require('./projects')); // Configuring the extension "/stripe" to run according to the file stripe.ts
router.use('/request', require('./requests')); // Configuring the extension "/stripe" to run according to the file stripe.ts
router.use('/user', require('./user')); // Configuring the extension "/stripe" to run according to the file stripe.ts
module.exports = router;
//# sourceMappingURL=index.js.map