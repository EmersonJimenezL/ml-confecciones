import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Insumo } from './entities/insumo.entity';
import { InsumoController } from './insumo.controller';
import { InsumoService } from './insumo.service';

@Module({
  imports: [TypeOrmModule.forFeature([Insumo])],
  controllers: [InsumoController],
  providers: [InsumoService],
})
export class InsumoModule {}