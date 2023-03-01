"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const recados_entity_1 = require("./entities/recados.entity");
const users_entity_1 = require("./entities/users.entity");
const _1677705971569_CreateTable_1 = require("./migrations/1677705971569-CreateTable");
const _1677706278942_CreateTable_1 = require("./migrations/1677706278942-CreateTable");
const config = {
    type: "postgres",
    url: process.env.DATABASE_URL,
    synchronize: false,
    logging: false,
    entities: [users_entity_1.UserEntity, recados_entity_1.RecadoEntity],
    migrations: [_1677705971569_CreateTable_1.CreateTable1677705971569, _1677706278942_CreateTable_1.CreateTable1677706278942],
};
exports.default = config;
