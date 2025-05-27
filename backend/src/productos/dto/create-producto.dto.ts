import {
  IsString,
  IsNumber,
  IsNotEmpty,
  Min,
  IsPositive,
} from 'class-validator';

export class CreateProductoDto {
  @IsString()
  @IsNotEmpty({ message: 'El nombre del producto no puede estar vacío' })
  nombre: string;

  @IsString()
  @IsNotEmpty({ message: 'La descripcion es obligatorias' })
  descripcion: string;

  @IsNumber()
  @IsNotEmpty({ message: 'El precio no puede ser menor a 0' })
  @IsPositive({ message: 'el precio debe ser negativo' })
  precio: number;

  @IsString()
  @IsNotEmpty({ message: 'La descripcion es obligatorias' })
  imagen: string;

  @IsNumber()
  @IsNotEmpty({ message: 'El stock no puede ser menor a 0' })
  @Min(0, { message: 'el stock no puede ser negativo' })
  stock: number;

  @IsString()
  @IsNotEmpty({ message: 'La descripcion es obligatorias' })
  categoria: string;
}
