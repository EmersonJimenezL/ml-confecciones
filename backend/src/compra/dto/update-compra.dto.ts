import { IsNumber, IsDateString, IsString, IsOptional } from 'class-validator';

export class UpdateCompraDto {
  @IsNumber()
  @IsOptional()
  proveedorId?: number;

  @IsDateString()
  @IsOptional()
  fecha?: string; //  o Date

  @IsString()
  @IsOptional()
  descripcion?: string;

  @IsNumber()
  @IsOptional()
  total?: number;

  @IsNumber()
  @IsOptional()
  insumoId?: number;
}
