import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // Importa TypeOrmModule
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { Usuario } from './entities/usuario.entity'; // Asegúrate de que esta ruta sea correcta

@Module({
  imports: [TypeOrmModule.forFeature([Usuario])], // Configura TypeOrm para la entidad Usuario
  controllers: [UsuarioController],
  providers: [UsuarioService],
  exports: [UsuarioService], // Si otros módulos necesitan UsuarioService
})
export class UsuarioModule {}
