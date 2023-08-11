import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateStudentDto } from './dto/createStudent.dto';
import { StudentService } from './student.service';
import { UpdateStudentDto } from './dto/updateStudent.dto';

@Controller('student')
export class StudentController {
  constructor(private studentService: StudentService) {}

  @Post()
  async create(@Body() createStudent: CreateStudentDto) {
    return this.studentService.createStudent(createStudent);
  }

  @Get()
  async getAllStudent(
    @Query('page') page: number,
    @Query('take') take: number,
    @Query('cursor') cursor: number,
    @Query('name') name: string,
  ) {
    const params = { page, take, cursor, name };
    return this.studentService.getAllStudent(params);
  }

  @Get(':id')
  async getStudentById(@Param('id') id: number) {
    return this.studentService.getStudentById(id);
  }

  @Patch(':id')
  async updateStudent(
    @Param('id') id: number,
    @Body() updateStudentDto: UpdateStudentDto,
  ) {
    return this.studentService.updateStudent(id, updateStudentDto);
  }

  @Delete(':id')
  async removeStudent(@Param('id') id: number) {
    return this.studentService.removeStudent(id);
  }
}
