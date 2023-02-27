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
exports.Contracts = void 0;
const typeorm_1 = require("typeorm");
let Contracts = class Contracts {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int' }),
    __metadata("design:type", Number)
], Contracts.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], Contracts.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], Contracts.prototype, "homeId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], Contracts.prototype, "totalPrice", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', default: new Date().getHours() }),
    __metadata("design:type", String)
], Contracts.prototype, "timeStart", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', default: new Date().getHours() }),
    __metadata("design:type", String)
], Contracts.prototype, "timeEnd", void 0);
Contracts = __decorate([
    (0, typeorm_1.Entity)()
], Contracts);
exports.Contracts = Contracts;
//# sourceMappingURL=contracts.js.map