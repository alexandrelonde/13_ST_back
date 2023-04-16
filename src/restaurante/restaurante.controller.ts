import { Controller, Get, Param, Query } from '@nestjs/common';
import { RestauranteService } from './restaurante.service';
import { Restaurante } from './entities/restaurante.entity';
import { SearchDto } from './dto/procuraRestaurante.dto';

@Controller('restaurante')
export class RestauranteController {
  constructor(private readonly restauranteService: RestauranteService) {}

  @Get('listar')
  async listar(): Promise<Restaurante[]>{
    return this.restauranteService.listar();
  }

  @Get(':id/pratos')
  async listarRestauranteComPratos(@Param('id') id: number): Promise<Restaurante> {
    return await this.restauranteService.listarRestauranteComPratos(id);
  }

  @Get('/busca')
  async search(@Query() searchDto: SearchDto): Promise<Restaurante[]> {
    return this.restauranteService.search(searchDto);
  }

}