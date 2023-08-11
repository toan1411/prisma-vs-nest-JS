import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateClassDto } from './dto/createClass.dto';
import { ClassService } from './class.service';
import { UpdateClassDto } from './dto/updateClass.dto';

@Controller('class')
export class ClassController {
  constructor(private classService: ClassService) {}
  @Post()
  async createClass(@Body() data: CreateClassDto) {
    return this.classService.createClass(data);
  }

  @Get()
  async getAllClass() {
    return this.classService.getAllClass();
  }

  @Get(':id')
  async getClassById(@Param('id') id: number) {
    return this.classService.getClassById(id);
  }

  @Patch(':id')
  async updateClass(@Param('id') id: number, @Body() data: UpdateClassDto) {
    return this.classService.updateClass(id, data);
  }

  @HttpCode(204)
  @Delete(':id')
  async removeClass(@Param('id') id: number) {
    return this.classService.removeClass(id);
  }
}
