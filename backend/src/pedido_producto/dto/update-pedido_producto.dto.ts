import { IsNumber, IsOptional } from 'class-validator';

export class UpdatePedidoProductoDto {
  @IsNumber()
  @IsOptional()
  pedidoId?: number;

  @IsNumber()
  @IsOptional()
  productoId?: number;

  @IsNumber()
  @IsOptional()
  cantidad?: number;

  @IsNumber()
  @IsOptional()
  precioUnitario?: number;

  @IsNumber()
  @IsOptional()
  descuento?: number;
}
