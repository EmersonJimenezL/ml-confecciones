import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PedidoProducto } from './entities/pedido_producto.entity';
import { CreatePedidoProductoDto } from './dto/create-pedido_producto.dto';
import { UpdatePedidoProductoDto } from './dto/update-pedido_producto.dto';

@Injectable()
export class PedidoProductoService {
  constructor(
    @InjectRepository(PedidoProducto)
    private pedidoProductoRepository: Repository<PedidoProducto>,
  ) {}

  async findAll(): Promise<PedidoProducto[]> {
    return this.pedidoProductoRepository.find({
      relations: ['pedido', 'producto'],
    }); // Carga las relaciones
  }

  async findOne(id: number): Promise<PedidoProducto | null> {
    const orderProduct = await this.pedidoProductoRepository.findOne({
      where: { id },
      relations: ['pedido', 'producto'],
    });
    return orderProduct !== undefined ? orderProduct : null;
  }

  async create(
    createPedidoProductoDto: CreatePedidoProductoDto,
  ): Promise<PedidoProducto> {
    const pedidoProducto = this.pedidoProductoRepository.create(
      createPedidoProductoDto,
    );
    return this.pedidoProductoRepository.save(pedidoProducto);
  }

  async update(
    id: number,
    updatePedidoProductoDto: UpdatePedidoProductoDto,
  ): Promise<PedidoProducto | null> {
    await this.pedidoProductoRepository.update(id, updatePedidoProductoDto);
    const updatedOrderProduct = await this.pedidoProductoRepository.findOne({
      where: { id },
      relations: ['pedido', 'producto'],
    });
    return updatedOrderProduct !== undefined ? updatedOrderProduct : null;
  }

  async remove(id: number): Promise<void> {
    await this.pedidoProductoRepository.delete(id);
  }
}
