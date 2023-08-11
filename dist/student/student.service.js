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
exports.StudentService = void 0;
const common_1 = require("@nestjs/common");
const student_repository_1 = require("./student.repository");
let StudentService = exports.StudentService = class StudentService {
    constructor(studentRepository) {
        this.studentRepository = studentRepository;
    }
    async createStudent(createStudent) {
        return await this.studentRepository.createStudent(createStudent);
    }
    async getAllStudent(params) {
        const a = {
            skip: (params.take - 1) * params.page || 0,
            take: +params.take || 100,
            where: { name: { contains: params.name } },
        };
        return await this.studentRepository.getAllStudent(a);
    }
    async getStudentById(id) {
        return await this.studentRepository.getStudentById(id);
    }
    async updateStudent(id, data) {
        return await this.studentRepository.updateStudent(id, data);
    }
    async removeStudent(id) {
        return await this.studentRepository.removeStudent(id);
    }
};
exports.StudentService = StudentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [student_repository_1.StudentRepository])
], StudentService);
//# sourceMappingURL=student.service.js.map