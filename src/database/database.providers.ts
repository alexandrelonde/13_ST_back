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
        // Perguntar mais a respeito do synchromnize: true
        // O porque não enviar esse parâmetro como true para produção
        // Sincroniza a criação da entity com a criação no banco de dados *****
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];