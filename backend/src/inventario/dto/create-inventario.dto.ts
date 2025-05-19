import { IsNumber, IsNotEmpty } from 'class-validator';

export class CreateInventarioDto {
  @IsNumber()
  @IsNotEmpty()
  insumoId: number;

  @IsNumber()
  @IsNotEmpty()
  stock: number;

  @IsNumber()
  @IsNotEmpty()
  stockMinimo: number;
}
