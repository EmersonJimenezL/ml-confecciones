import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Producto } from './entities/producto.entity';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';

@Injectable()
export class ProductoService {
  constructor(
    @InjectRepository(Producto)
    private productoRepository: Repository<Producto>,
  ) {}

  async findAll(): Promise<Producto[]> {
    return this.productoRepository.find();
  }

  async findOne(id: number): Promise<Producto | null> {
    const product = await this.productoRepository.findOne({ where: { id } });
    return product !== undefined ? product : null;
  }

  async create(createProductoDto: CreateProductoDto): Promise<Producto> {
    const producto = this.productoRepository.create(createProductoDto);
    return this.productoRepository.save(producto);
  }

  async update(
    id: number,
    updateProductoDto: UpdateProductoDto,
  ): Promise<Producto | null> {
    await this.productoRepository.update(id, updateProductoDto);
    const updatedProduct = await this.productoRepository.findOne({
      where: { id },
    });
    return updatedProduct !== undefined ? updatedProduct : null;
  }

  async remove(id: number): Promise<void> {
    await this.productoRepository.delete(id);
  }
}
