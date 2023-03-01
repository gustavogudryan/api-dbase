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
const user_repository_1 = require("../repositories/user.repository");
const repository = new user_repository_1.UserRepository();
function checkEmailExist(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { email } = req.body;
        const exist = yield repository.checkEmail(email);
        if (exist) {
            return res.status(409).json({ error: "Email já registrado" });
        }
        next();
    });
}
exports.default = checkEmailExist;
