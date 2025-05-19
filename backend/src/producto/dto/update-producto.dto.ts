import { IsString, IsNumber, IsOptional } from 'class-validator';

export class UpdateProductoDto {
  @IsString()
  @IsOptional()
  nombre?: string | null;

  @IsString()
  @IsOptional()
  descripcion?: string | null;

  @IsNumber()
  @IsOptional()
  precio?: number | null;

  @IsString()
  @IsOptional()
  imagen?: string | null;
}
