import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Prato } from './entities/prato.entity';

@Injectable()
export class PratoService {
  constructor(
    @Inject('PRATO_REPOSITORY')
    private pratoRepository: Repository<Prato>,
  ) {}

  async listar(): Promise<Prato[]> {
    return this.pratoRepository.find();
  }
}