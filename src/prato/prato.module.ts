import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { pratoProviders } from './prato.providers';
import { PratoService } from './prato.service';
import { PratoController } from './prato.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [PratoController],
  providers: [
    ...pratoProviders,
    PratoService,
  ],
})
export class PratoModule {}