"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes/routes"));
const server = (0, express_1.default)();
const port = process.env.PORT || 3030;
(0, routes_1.default)(server);
server.use(express_1.default.json(), (0, cors_1.default)());
server.listen(port, () => console.log(`Server funcinando na porta: ${port} `));
