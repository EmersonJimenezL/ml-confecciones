import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ProveedorService } from './proveedor.service';
import { CreateProveedorDto } from './dto/create-proveedor.dto';
import { UpdateProveedorDto } from './dto/update-proveedor.dto';

@Controller('proveedores')
export class ProveedorController {
  constructor(private readonly proveedorService: ProveedorService) {}

  @Get()
  async findAll() {
    return this.proveedorService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const supplier = await this.proveedorService.findOne(+id);
    return supplier !== undefined ? supplier : null;
  }

  @Post()
  async create(@Body() createProveedorDto: CreateProveedorDto) {
    return this.proveedorService.create(createProveedorDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateProveedorDto: UpdateProveedorDto) {
    const updatedSupplier = await this.proveedorService.update(+id, updateProveedorDto);
    return updatedSupplier !== undefined ? updatedSupplier : null;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.proveedorService.remove(+id);
  }
}