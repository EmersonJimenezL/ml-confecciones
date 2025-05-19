import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Usuario } from '../../usuario/entities/usuario.entity';
import { Producto } from '../../producto/entities/producto.entity';

@Entity()
export class Pedido {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Usuario, (usuario) => usuario.pedidos)
  usuario: Usuario;

  @Column({ type: 'varchar', length: 50, nullable: true })
  tipo: string | null;

  @Column({ type: 'varchar', length: 50, nullable: true })
  estado: string | null;

  @Column({ type: 'date', nullable: false })
  fecha: Date;

  @Column({ type: 'text', nullable: true })
  instrucciones: string | null;

  @Column({ type: 'varchar', length: 255, nullable: true })
  archivoAdjunto: string | null;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  total: number;

  @ManyToMany(() => Producto, (producto) => producto.pedidos)
  @JoinTable()
  productos: Producto[];
}
