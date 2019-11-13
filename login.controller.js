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
const User_model_1 = require("../models/User.model");
const router = express_1.Router();
router.get('/all', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const instances = yield User_model_1.User.findAll();
    if (instances !== null) {
        res.statusCode = 200;
        res.send(instances.map(e => e.toSimplification()));
    }
    res.statusCode = 300;
    res.send('null');
}));
router.post('/:email/:password', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const email = req.params.email;
    const password = req.params.password;
    if (email == null || password == null) {
        res.statusCode = 403;
        res.send('');
        return;
    }
    try {
        const instance = yield User_model_1.User.findAll();
        if (instance !== null) {
            let i = 0;
            for (i = 0; i < instance.length; i++) {
                if (instance[i].email === email && instance[i].password === password) {
                    res.statusCode = 200;
                    res.send(instance[i].toSimplification());
                    return;
                }
            }
            res.statusCode = 404;
            res.send('wrong you noob');
            return;
        }
        res.statusCode = 404;
        res.send('');
    }
    catch (ex) {
        res.statusCode = 405;
        res.send('exception:' + ex);
    }
}));
exports.LoginController = router;
//# sourceMappingURL=login.controller.js.map