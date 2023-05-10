import { Body, Controller, Get, Param, Post, Query, UseGuards } from "@nestjs/common";
import { RestauranteService } from './restaurante.service';
import { Restaurante } from './entities/restaurante.entity';
import { SearchDto } from './dto/procuraRestaurante.dto';
import { RestauranteCadastrarDto } from './dto/restaurante.cadastrar.dto';
import { ResultadoDto } from 'src/dto/resultado.dto';
import { AuthGuard } from "@nestjs/passport";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";

@Controller('restaurante')
export class RestauranteController {
  constructor(private readonly restauranteService: RestauranteService) {}

  @UseGuards(JwtAuthGuard) // ==========> GUARDIÃO (com bearer token) 
  @Get('listar')
  async listar(): Promise<Restaurante[]>{
    return this.restauranteService.listar();
  }

  @UseGuards(JwtAuthGuard) // ==========> GUARDIÃO (com bearer token) 
  @Get(':id/pratos')
  async listarRestauranteComPratos(@Param('id') id: number): Promise<Restaurante> {
    return await this.restauranteService.listarRestauranteComPratos(id);
  }

  @UseGuards(JwtAuthGuard) // ==========> GUARDIÃO (com bearer token) 
  @Get('/busca')
  async search(@Query() searchDto: SearchDto): Promise<Restaurante[]> {
    return this.restauranteService.search(searchDto);
  }

  @Post('cadastrar')
  async cadastrar(@Body()data: RestauranteCadastrarDto): Promise<ResultadoDto>{
    return this.restauranteService.cadastrar(data)
  }

}
