import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { RestauranteModule } from './restaurante/restaurante.module';
import { PratoModule } from './prato/prato.module';

@Module({
  imports: [
    UsuarioModule,
    RestauranteModule,
    PratoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
