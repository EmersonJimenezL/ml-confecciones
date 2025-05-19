import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Insumo } from '../../insumo/entities/insumo.entity';

@Entity()
export class Inventario {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Insumo, (insumo) => insumo.inventarios)
  insumo: Insumo;

  @Column({ type: 'int', nullable: false })
  stock: number;

  @Column({ type: 'int', nullable: false })
  stockMinimo: number;
}
