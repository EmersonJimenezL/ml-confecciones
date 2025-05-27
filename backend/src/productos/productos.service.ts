import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { Producto } from './entities/producto.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductosService {
  constructor(
    @InjectRepository(Producto) // Inyecta el repositorio de TypeORM para la entidad Producto
    private productosRepository: Repository<Producto>,
  ) {}

  async create(createProductoDto: CreateProductoDto): Promise<Producto> {
    const newProducto = this.productosRepository.create(createProductoDto);
    return this.productosRepository.save(newProducto);
  }

  findAll(): Promise<Producto[]> {
    return this.productosRepository.find();
  }

  async findOne(id: number): Promise<Producto> {
    const producto = await this.productosRepository.findOne({ where: { id } });
    if (!producto) {
      throw new NotFoundException(`Producto con ID ${id} no encontrado`);
    }
    return producto;
  }

  async update(
    id: number,
    updateProductoDto: UpdateProductoDto,
  ): Promise<Producto> {
    const producto = await this.productosRepository.preload({
      id: id,
      ...updateProductoDto,
    });

    if (!producto) {
      throw new NotFoundException(
        `Producto con ID ${id} no encontrado para actualizar`,
      );
    }
    return this.productosRepository.save(producto);
  }

  async remove(id: number): Promise<void> {
    const result = await this.productosRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(
        `Producto con ID ${id} no encontrado para eliminar`,
      );
    }
  }
}
