import { Module } from '@nestjs/common';
import { ClassController } from './class.controller';
import { ClassService } from './class.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ClassRepository } from './class.repository';

@Module({
  imports: [PrismaModule],
  controllers: [ClassController],
  providers: [ClassService, ClassRepository],
})
export class ClassModule {}
