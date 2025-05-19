import { IsString, IsOptional, IsNotEmpty } from 'class-validator';

export class CreateProveedorDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsNotEmpty()
  rut: string;

  @IsString()
  @IsOptional()
  contacto?: string | null;
}