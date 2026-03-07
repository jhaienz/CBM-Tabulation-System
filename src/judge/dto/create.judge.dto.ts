import { IsString, IsMongoId, IsBoolean } from 'class-validator';

export class CreateJudgeDto {
  @IsString()
  username!: string;

  @IsString()
  password!: string;

  @IsMongoId()
  event!: string;

  @IsBoolean()
  siActive!: boolean;
}
