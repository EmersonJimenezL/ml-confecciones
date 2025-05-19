import { IsNumber, IsOptional, IsNotEmpty } from 'class-validator';

export class CreatePedidoProductoDto {
  @IsNumber()
  @IsNotEmpty()
  pedidoId: number;

  @IsNumber()
  @IsNotEmpty()
  productoId: number;

  @IsNumber()
  @IsNotEmpty()
  cantidad: number;

  @IsNumber()
  @IsOptional()
  precioUnitario?: number;

  @IsNumber()
  @IsOptional()
  descuento?: number;
}
