import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pedido } from './entities/pedido.entity';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';

@Injectable()
export class PedidoService {
  constructor(
    @InjectRepository(Pedido)
    private pedidoRepository: Repository<Pedido>,
  ) {}

  async findAll(): Promise<Pedido[]> {
    return this.pedidoRepository.find({ relations: ['usuario', 'productos'] }); //  Carga las relaciones
  }

  async findOne(id: number): Promise<Pedido | null> {
    const order = await this.pedidoRepository.findOne({
      where: { id },
      relations: ['usuario', 'productos'],
    });
    return order !== undefined ? order : null;
  }

  async create(createPedidoDto: CreatePedidoDto): Promise<Pedido> {
    const pedido = this.pedidoRepository.create(createPedidoDto);
    return this.pedidoRepository.save(pedido);
  }

  async update(
    id: number,
    updatePedidoDto: UpdatePedidoDto,
  ): Promise<Pedido | null> {
    await this.pedidoRepository.update(id, updatePedidoDto);
    const updatedOrder = await this.pedidoRepository.findOne({
      where: { id },
      relations: ['usuario', 'productos'],
    });
    return updatedOrder !== undefined ? updatedOrder : null;
  }

  async remove(id: number): Promise<void> {
    await this.pedidoRepository.delete(id);
  }
}
