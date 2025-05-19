import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Compra } from '../../compra/entities/compra.entity';
import { Inventario } from '../../inventario/entities/inventario.entity';

@Entity()
export class Insumo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  nombre: string;

  @Column({ type: 'text', nullable: true })
  descripcion: string | null;

  @Column({ type: 'varchar', length: 50, nullable: true })
  tipo: string | null;

  @Column({ type: 'varchar', length: 50, nullable: true })
  unidad: string | null;

  @OneToMany(() => Compra, (compra) => compra.insumo)
  compras: Compra[];

  @OneToMany(() => Inventario, (inventario) => inventario.insumo)
  inventarios: Inventario[];
}
