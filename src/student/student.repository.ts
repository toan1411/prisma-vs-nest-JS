import { PrismaService } from 'src/prisma/prisma.service';
import { CreateStudentDto } from './dto/createStudent.dto';
import { Injectable } from '@nestjs/common';
import { UpdateStudentDto } from './dto/updateStudent.dto';
import { Prisma, Student } from '@prisma/client';

@Injectable()
export class StudentRepository {
  constructor(private prisma: PrismaService) {}

  async createStudent(createStudent: CreateStudentDto) {
    console.log(createStudent);
    return await this.prisma.student.create({ data: createStudent });
  }

  async getAllStudent(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.StudentWhereUniqueInput;
    where?: Prisma.StudentWhereInput;
    orderBy?: Prisma.StudentOrderByWithRelationInput;
  }): Promise<Student[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return await this.prisma.student.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
      include: { class: true },
    });
  }

  async getStudentById(id: number) {
    return await this.prisma.student.findUnique({ where: { id: +id } });
  }

  async updateStudent(id: number, data: UpdateStudentDto) {
    return await this.prisma.student.update({
      where: { id: +id },
      data: data,
    });
  }

  async removeStudent(id: number) {
    return await this.prisma.student.delete({ where: { id: +id } });
  }
}
