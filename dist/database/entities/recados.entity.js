"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecadoEntity = void 0;
const typeorm_1 = require("typeorm");
const users_entity_1 = require("./users.entity");
let RecadoEntity = class RecadoEntity extends typeorm_1.BaseEntity {
    beforeInsert() {
        this.idRecado = new Date().getTime().toString();
        this.recadoCreatedAt = new Date();
    }
    beforeUpdate() {
        this.recadoUpdatedAt = new Date();
    }
};
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: "id_recado" }),
    __metadata("design:type", String)
], RecadoEntity.prototype, "idRecado", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "titulo" }),
    __metadata("design:type", String)
], RecadoEntity.prototype, "recadoTitulo", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "descricao" }),
    __metadata("design:type", String)
], RecadoEntity.prototype, "recadoDescricao", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => users_entity_1.UserEntity),
    (0, typeorm_1.JoinColumn)({ name: "user_id" }),
    __metadata("design:type", String)
], RecadoEntity.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: "created_at" }),
    __metadata("design:type", Date)
], RecadoEntity.prototype, "recadoCreatedAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: "updated_at" }),
    __metadata("design:type", Date)
], RecadoEntity.prototype, "recadoUpdatedAt", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RecadoEntity.prototype, "beforeInsert", null);
__decorate([
    (0, typeorm_1.BeforeUpdate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RecadoEntity.prototype, "beforeUpdate", null);
RecadoEntity = __decorate([
    (0, typeorm_1.Entity)({ name: "recados" })
], RecadoEntity);
exports.RecadoEntity = RecadoEntity;
