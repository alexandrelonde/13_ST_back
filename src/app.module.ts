import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { RestauranteModule } from './restaurante/restaurante.module';

@Module({
  imports: [
    UsuarioModule,
    RestauranteModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
