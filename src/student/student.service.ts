import { Injectable } from '@nestjs/common';
import { StudentRepository } from './student.repository';
import { CreateStudentDto } from './dto/createStudent.dto';
import { UpdateStudentDto } from './dto/updateStudent.dto';

@Injectable()
export class StudentService {
  constructor(private studentRepository: StudentRepository) {}

  async createStudent(createStudent: CreateStudentDto) {
    return await this.studentRepository.createStudent(createStudent);
  }

  async getAllStudent(params: { page: number; take: number; name: string }) {
    const a = {
      skip: (params.take - 1) * params.page || 0,
      take: +params.take || 100,
      where: { name: { contains: params.name } },
    };
    return await this.studentRepository.getAllStudent(a);
  }

  async getStudentById(id: number) {
    return await this.studentRepository.getStudentById(id);
  }

  async updateStudent(id: number, data: UpdateStudentDto) {
    return await this.studentRepository.updateStudent(id, data);
  }

  async removeStudent(id: number) {
    return await this.studentRepository.removeStudent(id);
  }
}
