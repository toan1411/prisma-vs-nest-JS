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
exports.ClassService = void 0;
const common_1 = require("@nestjs/common");
const class_repository_1 = require("./class.repository");
let ClassService = exports.ClassService = class ClassService {
    constructor(classRepository) {
        this.classRepository = classRepository;
    }
    async createClass(data) {
        return this.classRepository.createClass(data);
    }
    async getAllClass() {
        return this.classRepository.getAllClass();
    }
    async getClassById(id) {
        return this.classRepository.getClassById(id);
    }
    async updateClass(id, data) {
        return this.classRepository.updateClass(id, data);
    }
    async removeClass(id) {
        return this.classRepository.removeClass(id);
    }
};
exports.ClassService = ClassService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [class_repository_1.ClassRepository])
], ClassService);
//# sourceMappingURL=class.service.js.map