import { DataSource } from 'typeorm';
import { Restaurante } from './entities/restaurante.entity';

export const restauranteProviders = [
  {
    provide: 'RESTAURANTE_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Restaurante),
    inject: ['DATA_SOURCE'],
  },
];