"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function checkInputs(req, res, next) {
    const { name, email, password, repassword } = req.body;
    if (!name || !email || !password || !repassword) {
        return res.status(400).json({
            success: false,
            message: "Required fields not filled",
        });
    }
    next();
}
exports.default = checkInputs;
