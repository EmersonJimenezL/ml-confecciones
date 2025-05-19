import {
  IsNumber,
  IsString,
  IsDateString,
  IsOptional,
  IsArray,
} from 'class-validator';

export class UpdatePedidoDto {
  @IsNumber()
  @IsOptional()
  usuarioId?: number;

  @IsString()
  @IsOptional()
  tipo?: string;

  @IsString()
  @IsOptional()
  estado?: string;

  @IsDateString()
  @IsOptional()
  fecha?: string; //  o Date

  @IsString()
  @IsOptional()
  instrucciones?: string;

  @IsString()
  @IsOptional()
  archivoAdjunto?: string;

  @IsNumber()
  @IsOptional()
  total?: number;

  @IsArray() // Indica que la propiedad es un arreglo
  @IsNumber({}, { each: true }) // Valida que cada elemento del arreglo sea un número
  @IsOptional()
  productosIds?: number[];
}
