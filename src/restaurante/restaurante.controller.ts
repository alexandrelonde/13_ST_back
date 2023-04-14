import { Controller, Get } from '@nestjs/common';
import { RestauranteService } from './restaurante.service';
import { Restaurante } from './restaurante.entity';

@Controller('restaurante')
export class RestauranteController {
  constructor(private readonly restauranteService: RestauranteService) {}

  @Get('listar')
  async listar(): Promise<Restaurante[]>{
    return this.restauranteService.listar();
  }

}