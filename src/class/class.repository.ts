import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateClassDto } from './dto/createClass.dto';
import { UpdateClassDto } from './dto/updateClass.dto';

@Injectable()
export class ClassRepository {
  constructor(private prisma: PrismaService) {}

  async createClass(data: CreateClassDto) {
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

  async getClassById(id: number) {
    return this.prisma.class.findUnique({ where: { id: +id } });
  }

  async updateClass(id: number, data: UpdateClassDto) {
    return this.prisma.class.update({
      where: { id: +id },
      data: data,
    });
  }

  async removeClass(id: number) {
    this.prisma.class.delete({ where: { id: +id } });
  }
}
