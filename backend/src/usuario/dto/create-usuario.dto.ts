import { IsString, IsEmail, IsNotEmpty, Length } from 'class-validator';

export class CreateUsuarioDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 20)
  rut: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 255)
  name: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 255)
  apellido: string;

  @IsEmail()
  @IsNotEmpty()
  @Length(1, 255)
  email: string;

  @IsString()
  @IsNotEmpty()
  @Length(8)
  contrasenna: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 50)
  rol: string;
}
