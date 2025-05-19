import { IsString, IsEmail, IsOptional, Length } from 'class-validator';

export class UpdateUsuarioDto {
  @IsString()
  @IsOptional()
  @Length({ min: 1, max: 20 })
  rut?: string | null;

  @IsString()
  @IsOptional()
  @Length({ min: 1, max: 255 })
  name?: string | null;

  @IsString()
  @IsOptional()
  @Length({ min: 1, max: 255 })
  apellido?: string | null;

  @IsEmail()
  @IsOptional()
  @Length({ min: 1, max: 255 })
  email?: string | null;

  @IsString()
  @IsOptional()
  @Length({ min: 8 })
  contrasenna?: string | null;

  @IsString()
  @IsOptional()
  @Length({ min: 1, max: 50 })
  rol?: string | null;
}
