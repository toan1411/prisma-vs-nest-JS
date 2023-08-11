import { IsOptional, Length } from 'class-validator';

export class UpdateClassDto {
  @Length(2)
  @IsOptional()
  name: string;

  @Length(5)
  @IsOptional()
  address: string;
}
