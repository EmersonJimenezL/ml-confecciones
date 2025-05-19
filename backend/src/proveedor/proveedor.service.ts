import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Proveedor } from './entities/proveedor.entity';
import { CreateProveedorDto } from './dto/create-proveedor.dto';
import { UpdateProveedorDto } from './dto/update-proveedor.dto';

@Injectable()
export class ProveedorService {
  constructor(
    @InjectRepository(Proveedor)
    private proveedorRepository: Repository<Proveedor>,
  ) {}

  async findAll(): Promise<Proveedor[]> {
    return this.proveedorRepository.find();
  }

  async findOne(id: number): Promise<Proveedor | null> {
    const supplier = await this.proveedorRepository.findOne({ where: { id } });
    return supplier !== undefined ? supplier : null;
  }

  async create(createProveedorDto: CreateProveedorDto): Promise<Proveedor> {
    const proveedor = this.proveedorRepository.create(createProveedorDto);
    return this.proveedorRepository.save(proveedor);
  }

  async update(id: number, updateProveedorDto: UpdateProveedorDto): Promise<Proveedor | null> {
    await this.proveedorRepository.update(id, updateProveedorDto);
    const updatedSupplier = await this.proveedorRepository.findOne({ where: { id } });
    return updatedSupplier !== undefined ? updatedSupplier : null;
  }

  async remove(id: number): Promise<void> {
    await this.proveedorRepository.delete(id);
  }
}