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
exports.ClassRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ClassRepository = exports.ClassRepository = class ClassRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createClass(data) {
        return this.prisma.class.create({ data: data });
    }
    async getAllClass() {
        return this.prisma.class.findMany({
            include: {
                student: {
                    where: { gpa: { gt: 5.0 } },
                },
            },
        });
    }
    async getClassById(id) {
        return this.prisma.class.findUnique({ where: { id: +id } });
    }
    async updateClass(id, data) {
        return this.prisma.class.update({
            where: { id: +id },
            data: data,
        });
    }
    async removeClass(id) {
        this.prisma.class.delete({ where: { id: +id } });
    }
};
exports.ClassRepository = ClassRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ClassRepository);
//# sourceMappingURL=class.repository.js.map