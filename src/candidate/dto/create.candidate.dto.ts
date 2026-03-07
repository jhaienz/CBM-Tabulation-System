import { IsString, IsNumber, IsMongoId } from 'class-validator';

export class CreateCandidateDto {
  @IsNumber()
  age!: number;

  @IsString()
  course!: string;

  @IsString()
  name!: string;

  @IsNumber()
  number!: number;

  @IsString()
  photoUrl!: string;

  @IsMongoId()
  event!: string;
}
