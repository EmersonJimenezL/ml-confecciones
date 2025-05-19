import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';

@Controller('pedidos')
export class PedidoController {
  constructor(private readonly pedidoService: PedidoService) {}

  @Get()
  async findAll() {
    return this.pedidoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const order = await this.pedidoService.findOne(+id);
    return order !== undefined ? order : null;
  }

  @Post()
  async create(@Body() createPedidoDto: CreatePedidoDto) {
    return this.pedidoService.create(createPedidoDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updatePedidoDto: UpdatePedidoDto,
  ) {
    const updatedOrder = await this.pedidoService.update(+id, updatePedidoDto);
    return updatedOrder !== undefined ? updatedOrder : null;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.pedidoService.remove(+id);
  }
}
