import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Pedido } from '../pedido/entities/pedido.entity';

@Entity()
export class Producto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  nombre: string;

  @Column({ type: 'text', nullable: true })
  descripcion: string | null;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  precio: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  imagen: string | null;

  @ManyToMany(() => Pedido, (pedido) => pedido.productos)
  @JoinTable()
  pedidos: Pedido[];
}
