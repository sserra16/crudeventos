import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './usuario.entity';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario) private usuariosRepository: Repository<Usuario>,
  ) {}

  async getUsuarios(): Promise<Usuario[]> {
    return await this.usuariosRepository.find();
  }

  async findOne(id: number): Promise<Usuario> {
    return await this.usuariosRepository.findOneBy({ id });
  }

  async createUsuario(usuario: Usuario): Promise<void> {
    await this.usuariosRepository.save(usuario);
  }

  async removeUsuario(id: number): Promise<void> {
    await this.usuariosRepository.delete(id);
  }

  async editUsuario(id: number, usuario: Usuario): Promise<Usuario> {
    const editedUsuario = await this.usuariosRepository.findOneBy({ id });
    if (!editedUsuario) throw new NotFoundException('Usuario not found');

    editedUsuario.email = usuario.email;
    editedUsuario.nome = usuario.nome;
    editedUsuario.telefone = usuario.telefone;
    await editedUsuario.save();
    return editedUsuario;
  }
}
