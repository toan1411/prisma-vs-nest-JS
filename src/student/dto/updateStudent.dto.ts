import { IsNumber, IsOptional, Length } from 'class-validator';

export class UpdateStudentDto {
  @IsOptional()
  @Length(5)
  name: string;

  @IsOptional()
  @IsNumber()
  age: number;
}
