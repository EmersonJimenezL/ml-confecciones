import { IsString, IsOptional } from 'class-validator';

export class UpdateProveedorDto {
  @IsString()
  @IsOptional()
  nombre?: string;

  @IsString()
  @IsOptional()
  rut?: string;

  @IsString()
  @IsOptional()
  contacto?: string;
}
