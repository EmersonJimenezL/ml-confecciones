import { IsString, IsOptional, IsNotEmpty } from 'class-validator';

export class CreateInsumoDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsOptional()
  descripcion?: string | null;

  @IsString()
  @IsOptional()
  tipo?: string | null;

  @IsString()
  @IsOptional()
  unidad?: string | null;
}
