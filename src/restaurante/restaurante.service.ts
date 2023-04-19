import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Restaurante } from './entities/restaurante.entity';
import { SearchDto } from './dto/procuraRestaurante.dto';
import { RestauranteCadastrarDto } from './dto/restaurante.cadastrar.dto';
import { ResultadoDto } from 'src/dto/resultado.dto';
import { error } from 'console';

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

  async cadastrar(data: RestauranteCadastrarDto): Promise<ResultadoDto>{
    let restaurante = new Restaurante()
    restaurante.nome = data.nome
    restaurante.telefone = data.telefone
    restaurante.endereco = data.endereco

    // Verificar se já existe um restaurante com o telefone cadastrado
    const restauranteExistente = await this.restauranteRepository
    .createQueryBuilder("restaurante")
    .where("restaurante.telefone = :telefone", { telefone: data.telefone })
    .getOne();

    // Caso já exista um restaurante com o mesmo telefone, retorna uma mensagem de erro
    if (restauranteExistente) {
      return <ResultadoDto> {
        status: false,
        mensagem: "Já existe um restaurante cadastrado com esse telefone."
      }
    }

    return this.restauranteRepository.save(restaurante)
    .then((result) => {
      return <ResultadoDto> {
        status: true,
        mensagem: "Restaurante cadastrado com sucesso!"
      }
    })
    .catch((error) => {
      return <ResultadoDto> {
        status: false,
        mensagem: "Houve um erro ao cadastrar o restaurante."
      }
    })
  }
}






