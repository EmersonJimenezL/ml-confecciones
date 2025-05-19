import {
  IsNumber,
  IsString,
  IsDateString,
  IsOptional,
  IsNotEmpty,
  IsArray,
} from 'class-validator';

export class CreatePedidoDto {
  @IsNumber()
  @IsNotEmpty()
  usuarioId: number;

  @IsString()
  @IsOptional()
  tipo?: string | null;

  @IsString()
  @IsOptional()
  estado?: string | null;

  @IsDateString()
  @IsNotEmpty()
  fecha: string; //  o Date

  @IsString()
  @IsOptional()
  instrucciones?: string | null;

  @IsString()
  @IsOptional()
  archivoAdjunto?: string | null;

  @IsNumber()
  @IsNotEmpty()
  total: number;

  @IsArray()
  @IsNumber({}, { each: true })
  @IsOptional()
  productosIds?: number[] | null;
}
