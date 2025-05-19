import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Compra } from './entities/compra.entity';
import { CreateCompraDto } from './dto/create-compra.dto';
import { UpdateCompraDto } from './dto/update-compra.dto';

@Injectable()
export class CompraService {
  constructor(
    @InjectRepository(Compra)
    private compraRepository: Repository<Compra>,
  ) {}

  async findAll(): Promise<Compra[]> {
    return this.compraRepository.find({ relations: ['proveedor', 'insumo'] }); //  Carga las relaciones
  }

  async findOne(id: number): Promise<Compra | null> {
    return this.compraRepository.findOne({
      where: { id },
      relations: ['proveedor', 'insumo'],
    });
  }

  async create(createCompraDto: CreateCompraDto): Promise<Compra> {
    const compra = this.compraRepository.create(createCompraDto);
    return this.compraRepository.save(compra);
  }

  async update(
    id: number,
    updateCompraDto: UpdateCompraDto,
  ): Promise<Compra | null> {
    await this.compraRepository.update(id, updateCompraDto);
    return this.compraRepository.findOne({
      where: { id },
      relations: ['proveedor', 'insumo'],
    });
  }

  async remove(id: number): Promise<void> {
    await this.compraRepository.delete(id);
  }
}
