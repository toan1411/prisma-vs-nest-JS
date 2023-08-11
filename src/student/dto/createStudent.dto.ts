import { IsNumber, Length } from 'class-validator';

export class CreateStudentDto {
  @Length(5)
  name: string;

  @IsNumber()
  age: number;

  @IsNumber()
  gpa: number;

  @IsNumber()
  classId: number;
}
