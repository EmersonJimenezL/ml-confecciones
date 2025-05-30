import {
  IsString,
  IsNumber,
  IsNotEmpty,
  Min,
  IsPositive,
  IsEnum,
} from 'class-validator';
import { Talla } from '../../common/enums/talla.enum';

export class CreateProductoDto {
  @IsString()
  @IsNotEmpty({ message: 'El nombre del producto no puede estar vacío' })
  nombre: string;

  @IsString()
  @IsNotEmpty({ message: 'La descripcion es obligatorias' })
  descripcion: string;

  @IsEnum(Talla, { message: 'La talla proporcionada no es valida' })
  @IsNotEmpty({ message: 'La talla es obligatorias' })
  talla: Talla;

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
