/**
 * Move to version 3 DONE
 */

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
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.statusCode = 200;
    res.send('Welcome to Express');
}));
router.get('/:name', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const name = req.params.name;
    res.statusCode = 200;
    res.send('Welcome to Express ' + name);
}));
exports.WelcomeController = router;
//# sourceMappingURL=welcome.controller.js.map
