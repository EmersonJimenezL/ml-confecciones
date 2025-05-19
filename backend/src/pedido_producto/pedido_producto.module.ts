import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PedidoProducto } from './entities/pedido_producto.entity';
import { PedidoProductoController } from './pedido_producto.controller';
import { PedidoProductoService } from './pedido_producto.service';

@Module({
  imports: [TypeOrmModule.forFeature([PedidoProducto])],
  controllers: [PedidoProductoController],
  providers: [PedidoProductoService],
})
export class PedidoProductoModule {}