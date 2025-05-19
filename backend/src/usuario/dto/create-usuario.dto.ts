import { IsString, IsEmail, IsNotEmpty, Length } from 'class-validator';

export class CreateUsuarioDto {
  @IsString()
  @IsNotEmpty()
  @Length({ min: 1, max: 20 })
  rut: string;

  @IsString()
  @IsNotEmpty()
  @Length({ min: 1, max: 255 })
  name: string;

  @IsString()
  @IsNotEmpty()
  @Length({ min: 1, max: 255 })
  apellido: string;

  @IsEmail()
  @IsNotEmpty()
  @Length({ min: 1, max: 255 })
  email: string;

  @IsString()
  @IsNotEmpty()
  @Length({ min: 8 })
  contrasenna: string;

  @IsString()
  @IsNotEmpty()
  @Length({ min: 1, max: 50 })
  rol: string;
}
