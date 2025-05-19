import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Proveedor } from '../../proveedor/entities/proveedor.entity';
import { Insumo } from '../../insumo/entities/insumo.entity';

@Entity()
export class Compra {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Proveedor, (proveedor) => proveedor.compras)
  proveedor: Proveedor;

  @Column({ type: 'date', nullable: false })
  fecha: Date;

  @Column({ type: 'text', nullable: true })
  descripcion: string | null;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  total: number;

  @ManyToOne(() => Insumo, (insumo) => insumo.compras)
  insumo: Insumo;
}
