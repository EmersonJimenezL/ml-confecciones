import {
  IsNumber,
  IsDateString,
  IsString,
  IsOptional,
  IsNotEmpty,
} from 'class-validator';

export class CreateCompraDto {
  @IsNumber()
  @IsNotEmpty()
  proveedorId: number;

  @IsDateString()
  @IsNotEmpty()
  fecha: string; //  o Date

  @IsString()
  @IsOptional()
  descripcion?: string;

  @IsNumber()
  @IsNotEmpty()
  total: number;

  @IsNumber()
  @IsNotEmpty()
  insumoId: number;
}
