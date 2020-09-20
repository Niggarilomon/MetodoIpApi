"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_middleware_1 = __importDefault(require("../../middlewares/auth.middleware"));
const url_controller_1 = __importDefault(require("./url.controller"));
const router = express_1.Router();
router.post('/setURL', auth_middleware_1.default, url_controller_1.default.setUrl);
router.get('/getURL', auth_middleware_1.default, url_controller_1.default.getUrl);
exports.default = router;
//# sourceMappingURL=index.js.map