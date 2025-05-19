import { IsString, IsNumber, IsOptional, IsNotEmpty } from 'class-validator';

export class CreateProductoDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsOptional()
  descripcion?: string | null;

  @IsNumber()
  @IsNotEmpty()
  precio: number;

  @IsString()
  @IsOptional()
  imagen?: string | null;
}
