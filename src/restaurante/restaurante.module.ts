import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { restauranteProviders } from './restaurante.providers';
import { RestauranteService } from './restaurante.service';
import { RestauranteController } from './restaurante.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [RestauranteController],
  providers: [
    ...restauranteProviders,
    RestauranteService,
  ],
})
export class RestauranteModule {}