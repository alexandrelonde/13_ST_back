import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { RestauranteModule } from './restaurante/restaurante.module';
import { PratoModule } from './prato/prato.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    AuthModule, // Chama o UsuarioModule
    RestauranteModule,
    PratoModule,
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
