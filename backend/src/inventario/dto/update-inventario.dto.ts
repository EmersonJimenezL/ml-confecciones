import { IsNumber, IsOptional } from 'class-validator';

export class UpdateInventarioDto {
  @IsNumber()
  @IsOptional()
  insumoId?: number;

  @IsNumber()
  @IsOptional()
  stock?: number;

  @IsNumber()
  @IsOptional()
  stockMinimo?: number;
}
