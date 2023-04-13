import { Controller, Get } from '@nestjs/common';
import { PratoService } from './prato.service';
import { Prato } from './prato.entity';

@Controller('prato')
export class PratoController {
  constructor(private readonly pratoService: PratoService) {}

  @Get('listar')
  async listar(): Promise<Prato[]>{
    return this.pratoService.listar();
  }
}