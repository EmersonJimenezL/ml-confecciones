import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductoModule } from './producto/producto.module';
import { PedidoModule } from './pedido/pedido.module';
import { InsumoModule } from './insumo/insumo.module';
import { ProveedorModule } from './proveedor/proveedor.module';
import { CompraModule } from './compra/compra.module';
import { InventarioModule } from './inventario/inventario.module';
import { PedidoProductoModule } from './pedido_producto/pedido_producto.module';
import { UsuarioModule } from './usuario/usuario.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '##mlc.2025**',
      database: 'ml_confecciones',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // ¡CUIDADO! Solo para desarrollo
    }),
    UsuarioModule,
    ProductoModule,
    PedidoModule,
    InsumoModule,
    ProveedorModule,
    CompraModule,
    InventarioModule,
    PedidoProductoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
