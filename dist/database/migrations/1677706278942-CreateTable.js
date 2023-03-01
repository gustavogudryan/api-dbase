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
exports.CreateTable1677706278942 = void 0;
const typeorm_1 = require("typeorm");
class CreateTable1677706278942 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.createTable(new typeorm_1.Table({
                name: "recados",
                columns: [
                    {
                        name: "id_recado",
                        type: "varchar",
                        isPrimary: true,
                        isNullable: false,
                        length: "80",
                    },
                    {
                        name: "titulo",
                        type: "varchar",
                        length: "45",
                        isNullable: false,
                    },
                    {
                        name: "descricao",
                        type: "varchar",
                        length: "150",
                        isNullable: false,
                    },
                    {
                        name: "user_id",
                        type: "varchar",
                        length: "80",
                        isNullable: false,
                        isUnique: false,
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        isNullable: false,
                        default: "current_timestamp",
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        isNullable: false,
                        default: "current_timestamp",
                    },
                ],
                foreignKeys: [
                    {
                        name: "FK_users_user_id",
                        referencedTableName: "users",
                        referencedColumnNames: ["user_id"],
                        columnNames: ["user_id"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE",
                    },
                ],
            }));
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
}
exports.CreateTable1677706278942 = CreateTable1677706278942;
