import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Restaurante } from './restaurante.entity';

@Injectable()
export class RestauranteService {
  constructor(
    @Inject('RESTAURANTE_REPOSITORY')
    private restauranteRepository: Repository<Restaurante>,
  ) {}

  async listar(): Promise<Restaurante[]> {
    return this.restauranteRepository.find();
  }

  async listarRestauranteComPratos(id: number): Promise<Restaurante> {
    return await this.restauranteRepository
    .createQueryBuilder('restaurante')
    .leftJoinAndSelect('restaurante.pratos', 'pratos')
    .where('restaurante.id = :id', { id: id })
    .getOne();
  }
}