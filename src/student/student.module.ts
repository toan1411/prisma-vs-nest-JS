import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';
import { StudentRepository } from './student.repository';

@Module({
  imports: [PrismaModule],
  controllers: [StudentController],
  providers: [StudentService, StudentRepository],
})
export class StudentModule {}
