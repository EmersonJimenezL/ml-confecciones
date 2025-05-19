import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { PedidoProductoService } from './pedido_producto.service';
import { CreatePedidoProductoDto } from './dto/create-pedido_producto.dto';
import { UpdatePedidoProductoDto } from './dto/update-pedido_producto.dto';

@Controller('pedido-productos')
export class PedidoProductoController {
  constructor(private readonly pedidoProductoService: PedidoProductoService) {}

  @Get()
  async findAll() {
    return this.pedidoProductoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const orderProduct = await this.pedidoProductoService.findOne(+id);
    return orderProduct !== undefined ? orderProduct : null;
  }

  @Post()
  async create(@Body() createPedidoProductoDto: CreatePedidoProductoDto) {
    return this.pedidoProductoService.create(createPedidoProductoDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updatePedidoProductoDto: UpdatePedidoProductoDto,
  ) {
    const updatedOrderProduct = await this.pedidoProductoService.update(
      +id,
      updatePedidoProductoDto,
    );
    return updatedOrderProduct !== undefined ? updatedOrderProduct : null;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.pedidoProductoService.remove(+id);
  }
}
