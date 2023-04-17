import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { Usuario } from './entities/usuario.entity';
import { UsuarioCadastrarDto } from './dto/usuario.cadastrar.dto';
import { ResultadoDto } from 'src/dto/resultado.dto';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from 'src/auth/auth.service';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService,
    private authService: AuthService) {}

  @Get('listar')
  async listar(): Promise<Usuario[]>{
    return this.usuarioService.listar();
  }

  // Endpoint publico - verificar o uso de jwt ***
  @Post('cadastrar')
  async cadastrar(@Body()data: UsuarioCadastrarDto): Promise<ResultadoDto>{
    return this.usuarioService.cadastrar(data)
  }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}