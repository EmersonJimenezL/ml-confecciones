import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Insumo } from './entities/insumo.entity';
import { CreateInsumoDto } from './dto/create-insumo.dto';
import { UpdateInsumoDto } from './dto/update-insumo.dto';

@Injectable()
export class InsumoService {
  constructor(
    @InjectRepository(Insumo)
    private insumoRepository: Repository<Insumo>,
  ) {}

  async findAll(): Promise<Insumo[]> {
    return this.insumoRepository.find();
  }

  async findOne(id: number): Promise<Insumo | null> {
    const material = await this.insumoRepository.findOne({ where: { id } });
    return material !== undefined ? material : null;
  }

  async create(createInsumoDto: CreateInsumoDto): Promise<Insumo> {
    const insumo = this.insumoRepository.create(createInsumoDto);
    return this.insumoRepository.save(insumo);
  }

  async update(
    id: number,
    updateInsumoDto: UpdateInsumoDto,
  ): Promise<Insumo | null> {
    await this.insumoRepository.update(id, updateInsumoDto);
    const updatedMaterial = await this.insumoRepository.findOne({
      where: { id },
    });
    return updatedMaterial !== undefined ? updatedMaterial : null;
  }

  async remove(id: number): Promise<void> {
    await this.insumoRepository.delete(id);
  }
}
