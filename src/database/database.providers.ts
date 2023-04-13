import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '12345',
        database: 'sabortech',
        entities: [
            __dirname + '/../**/*.entity{.ts,.js}',
        ],
        synchronize: true, // Sincroniza a criação do banco de dados a partir da entity
      });

      return dataSource.initialize();
    },
  },
];