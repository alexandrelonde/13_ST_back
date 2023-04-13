import { DataSource } from 'typeorm';
import { Prato } from './prato.entity';

export const pratoProviders = [
  {
    provide: 'PRATO_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Prato),
    inject: ['DATA_SOURCE'],
  },
];