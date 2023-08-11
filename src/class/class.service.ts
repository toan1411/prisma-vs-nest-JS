import { Injectable } from '@nestjs/common';
import { ClassRepository } from './class.repository';
import { CreateClassDto } from './dto/createClass.dto';
import { UpdateClassDto } from './dto/updateClass.dto';

@Injectable()
export class ClassService {
  constructor(private classRepository: ClassRepository) {}

  async createClass(data: CreateClassDto) {
    return this.classRepository.createClass(data);
  }

  async getAllClass() {
    return this.classRepository.getAllClass();
  }

  async getClassById(id: number) {
    return this.classRepository.getClassById(id);
  }

  async updateClass(id: number, data: UpdateClassDto) {
    return this.classRepository.updateClass(id, data);
  }

  async removeClass(id: number) {
    return this.classRepository.removeClass(id);
  }
}
