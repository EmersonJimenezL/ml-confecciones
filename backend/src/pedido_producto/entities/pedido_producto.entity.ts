import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Pedido } from '../../pedido/entities/pedido.entity';
import { Producto } from '../../producto/entities/producto.entity';

@Entity()
export class PedidoProducto {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Pedido, (pedido) => pedido.productos)
  pedido: Pedido;

  @ManyToOne(() => Producto, (producto) => producto.pedidos)
  producto: Producto;

  @Column({ type: 'int', nullable: false })
  cantidad: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  precioUnitario: number | null;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  descuento: number | null;
}
