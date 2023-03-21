import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuariosController } from './usuario.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './usuario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario])],
  providers: [UsuarioService],
  controllers: [UsuariosController],
})
export class UsuariosModule {}
