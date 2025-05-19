import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductoService } from './producto.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';

@Controller('productos')
export class ProductoController {
  constructor(private readonly productoService: ProductoService) {}

  @Get()
  async findAll() {
    return this.productoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const product = await this.productoService.findOne(+id);
    return product !== undefined ? product : null;
  }

  @Post()
  async create(@Body() createProductoDto: CreateProductoDto) {
    return this.productoService.create(createProductoDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateProductoDto: UpdateProductoDto,
  ) {
    const updatedProduct = await this.productoService.update(
      +id,
      updateProductoDto,
    );
    return updatedProduct !== undefined ? updatedProduct : null;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.productoService.remove(+id);
  }
}
