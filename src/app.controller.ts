import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // Criando uma nova rota - como é uma rota get também, terá que ter outro nome
  @Get('objeto')
  getObject(): any {
    return this.appService.getObject(); 
  }
}

