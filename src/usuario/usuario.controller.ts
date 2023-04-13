import { Controller, Get } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { Usuario } from './usuario.entity';

@Controller()
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Get()
  async listar(): Promise<Usuario[]>{
    return
  }

}