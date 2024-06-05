import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsPositive, IsOptional } from 'class-validator';

export class GetProductRequestDto {
  @ApiPropertyOptional()
  @IsPositive()
  @IsOptional()
  @Type(() => Number)
  page: number = 1;

  @ApiPropertyOptional()
  @IsPositive()
  @IsOptional()
  @Type(() => Number)
  perPage: number = 25;
}
