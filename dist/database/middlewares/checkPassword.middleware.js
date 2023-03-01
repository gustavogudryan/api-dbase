"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function checkPasswords(req, res, next) {
    const { password, repassword } = req.body;
    if (password !== repassword) {
        return res.status(401).json({
            success: false,
            message: "As senhas não conferem!",
        });
    }
    next();
}
exports.default = checkPasswords;
