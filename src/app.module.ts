import { Module } from '@nestjs/common';
import { StudentModule } from './student/student.module';
import { PrismaModule } from './prisma/prisma.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClassModule } from './class/class.module';

@Module({
  imports: [StudentModule, PrismaModule, ClassModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
