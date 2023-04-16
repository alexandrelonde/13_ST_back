import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Restaurante } from './entities/restaurante.entity';
import { SearchDto } from './dto/procuraRestaurante.dto';

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

  async search(searchDto: SearchDto): Promise<Restaurante[]> {
    const { term } = searchDto;
    const searchTerm = `%${term}%`.toLowerCase();
  
    try {
      const restaurantesEncontrados = await this.restauranteRepository
        .createQueryBuilder('restaurante')
        .leftJoinAndSelect('restaurante.pratos', 'prato')
        .where('LOWER(restaurante.nome) LIKE :searchTerm', { searchTerm })
        .orWhere('LOWER(prato.nome) LIKE :searchTerm', { searchTerm })
        .orWhere('LOWER(prato.descricao) LIKE :searchTerm', { searchTerm })
        .getMany();

      return restaurantesEncontrados;
    } catch (error) {
      throw new Error('Ocorreu um erro ao realizar a busca.');
    }
  }
}






