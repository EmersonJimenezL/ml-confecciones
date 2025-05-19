import { IsNumber, IsString, IsDateString, IsOptional } from 'class-validator';

export class UpdatePedidoDto {
  @IsNumber()
  @IsOptional()
  usuarioId?: number | null;

  @IsString()
  @IsOptional()
  tipo?: string | null;

  @IsString()
  @IsOptional()
  estado?: string | null;

  @IsDateString()
  @IsOptional()
  fecha?: string | null; //  o Date

  @IsString()
  @IsOptional()
  instrucciones?: string | null;

  @IsString()
  @IsOptional()
  archivoAdjunto?: string | null;

  @IsNumber()
  @IsOptional()
  total?: number | null;

  @IsNumber({ each: true })
  @IsOptional()
  productosIds?: number[] | null;
}
