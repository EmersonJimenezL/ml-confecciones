import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { CompraService } from './compra.service';
import { CreateCompraDto } from './dto/create-compra.dto';
import { UpdateCompraDto } from './dto/update-compra.dto';

@Controller('compras')
export class CompraController {
  constructor(private readonly compraService: CompraService) {}

  @Get()
  async findAll() {
    return this.compraService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.compraService.findOne(+id);
  }

  @Post()
  async create(@Body() createCompraDto: CreateCompraDto) {
    return this.compraService.create(createCompraDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCompraDto: UpdateCompraDto,
  ) {
    return this.compraService.update(+id, updateCompraDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.compraService.remove(+id);
  }
}
