import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { Usuario } from './usuario.entity';

@Controller('usuarios')
export class UsuariosController {
  constructor(private usuarioService: UsuarioService) {}

  @Get()
  findAll() {
    return this.usuarioService.getUsuarios();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.usuarioService.findOne(id);
  }

  @Post()
  create(@Body() usuario: Usuario) {
    return this.usuarioService.createUsuario(usuario);
  }

  @Patch(':id')
  async editUsuario(
    @Body() usuario: Usuario,
    @Param('id') id: number,
  ): Promise<Usuario> {
    const noteEdited = await this.editUsuario(usuario, id);
    return noteEdited;
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): void {
    this.usuarioService.removeUsuario(id);
  }
}
