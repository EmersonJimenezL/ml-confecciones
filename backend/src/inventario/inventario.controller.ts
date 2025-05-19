import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { InventarioService } from './inventario.service';
import { CreateInventarioDto } from './dto/create-inventario.dto';
import { UpdateInventarioDto } from './dto/update-inventario.dto';

@Controller('inventarios')
export class InventarioController {
  constructor(private readonly inventarioService: InventarioService) {}

  @Get()
  async findAll() {
    return this.inventarioService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const inventory = await this.inventarioService.findOne(+id);
    return inventory !== undefined ? inventory : null;
  }

  @Post()
  async create(@Body() createInventarioDto: CreateInventarioDto) {
    return this.inventarioService.create(createInventarioDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateInventarioDto: UpdateInventarioDto) {
    const updatedInventory = await this.inventarioService.update(+id, updateInventarioDto);
    return updatedInventory !== undefined ? updatedInventory : null;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.inventarioService.remove(+id);
  }
}