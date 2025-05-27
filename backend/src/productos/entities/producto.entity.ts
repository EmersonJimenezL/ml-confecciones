import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('productos')
export class Producto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 150 })
  nombre: string;

  @Column({ type: 'text', nullable: false })
  descripcion: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  precio: number;

  @Column({ type: 'varchar', length: 255 })
  imagen: string;

  @Column({ type: 'int', nullable: false, default: 0 })
  stock: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  categoria: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updated_at: Date;
}
