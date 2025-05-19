import { IsString, IsOptional, IsEmail, Length } from 'class-validator';

export class UpdateUsuarioDto {
  @IsString()
  @IsOptional()
  @Length(1, 20) // Correcto: pasando directamente los números
  rut?: string;

  @IsString()
  @IsOptional()
  @Length(1, 255) // Correcto: pasando directamente los números
  name?: string;

  @IsString()
  @IsOptional()
  @Length(1, 255) // Correcto: pasando directamente los números
  apellido?: string;

  @IsEmail()
  @IsOptional()
  @Length(1, 255) // Correcto: pasando directamente los números
  email?: string;

  @IsString()
  @IsOptional()
  @Length(8, undefined) // Correcto: pasando directamente los números (sin máximo)
  contrasena?: string;

  @IsString()
  @IsOptional()
  @Length(1, 50) // Correcto: pasando directamente los números
  rol?: string;
}
