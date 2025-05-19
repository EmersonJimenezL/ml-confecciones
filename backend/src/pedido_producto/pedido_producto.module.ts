import { Module } from '@nestjs/common';
import { PedidoProductoService } from './pedido_producto.service';
import { PedidoProductoController } from './pedido_producto.controller';

@Module({
  controllers: [PedidoProductoController],
  providers: [PedidoProductoService],
})
export class PedidoProductoModule {}
