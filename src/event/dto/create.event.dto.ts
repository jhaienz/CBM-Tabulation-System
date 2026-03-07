import { Type } from 'class-transformer';
import {
  IsString,
  IsDate,
  IsArray,
  ValidateNested,
  IsNumber,
  Min,
  Max,
  ArrayMinSize,
  IsOptional,
} from 'class-validator';

class CategoryDto {
  @IsString()
  name!: string;

  @IsNumber()
  @Min(1)
  @Max(100)
  weight!: number;

  @IsNumber()
  @Min(1)
  maxScore!: number;
}

class ScoringConfigDto {
  @IsNumber()
  minScore!: number;

  @IsNumber()
  maxScore!: number;

  @IsNumber()
  @IsOptional()
  decimalPlaces?: number;
}

export class CreateEventDto {
  @IsString()
  name!: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  venue!: string;

  @IsDate()
  @Type(() => Date)
  date!: Date;

  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => CategoryDto)
  categories!: CategoryDto[];

  @ValidateNested()
  @Type(() => ScoringConfigDto)
  scoringConfig!: ScoringConfigDto;
}
