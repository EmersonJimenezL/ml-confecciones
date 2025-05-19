import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Compra } from '../../compra/entities/compra.entity';

@Entity()
export class Proveedor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  nombre: string;

  @Column({ type: 'varchar', length: 20, unique: true, nullable: false })
  rut: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  contacto: string | null;

  @OneToMany(() => Compra, (compra) => compra.proveedor)
  compras: Compra[];
}
