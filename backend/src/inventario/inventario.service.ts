import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Inventario } from './entities/inventario.entity';
import { CreateInventarioDto } from './dto/create-inventario.dto';
import { UpdateInventarioDto } from './dto/update-inventario.dto';

@Injectable()
export class InventarioService {
  constructor(
    @InjectRepository(Inventario)
    private inventarioRepository: Repository<Inventario>,
  ) {}

  async findAll(): Promise<Inventario[]> {
    return this.inventarioRepository.find({ relations: ['insumo'] }); //  Carga la relación con Insumo
  }

  async findOne(id: number): Promise<Inventario | null> {
    const inventory = await this.inventarioRepository.findOne({ where: { id }, relations: ['insumo'] });
    return inventory !== undefined ? inventory : null;
  }

  async create(createInventarioDto: CreateInventarioDto): Promise<Inventario> {
    const inventario = this.inventarioRepository.create(createInventarioDto);
    return this.inventarioRepository.save(inventario);
  }

  async update(id: number, updateInventarioDto: UpdateInventarioDto): Promise<Inventario | null> {
    await this.inventarioRepository.update(id, updateInventarioDto);
    const updatedInventory = await this.inventarioRepository.findOne({ where: { id }, relations: ['insumo'] });
    return updatedInventory !== undefined ? updatedInventory : null;
  }

  async remove(id: number): Promise<void> {
    await this.inventarioRepository.delete(id);
  }
}