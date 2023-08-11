import { Length } from 'class-validator';

export class CreateClassDto {
  @Length(2)
  name: string;

  @Length(5)
  address: string;
}
