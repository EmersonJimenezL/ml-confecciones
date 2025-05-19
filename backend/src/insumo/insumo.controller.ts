import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { InsumoService } from './insumo.service';
import { CreateInsumoDto } from './dto/create-insumo.dto';
import { UpdateInsumoDto } from './dto/update-insumo.dto';

@Controller('insumos')
export class InsumoController {
  constructor(private readonly insumoService: InsumoService) {}

  @Get()
  async findAll() {
    return this.insumoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const material = await this.insumoService.findOne(+id);
    return material !== undefined ? material : null;
  }

  @Post()
  async create(@Body() createInsumoDto: CreateInsumoDto) {
    return this.insumoService.create(createInsumoDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateInsumoDto: UpdateInsumoDto) {
    const updatedMaterial = await this.insumoService.update(+id, updateInsumoDto);
    return updatedMaterial !== undefined ? updatedMaterial : null;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.insumoService.remove(+id);
  }
}