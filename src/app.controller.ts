import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getGreetings() {
    return this.appService.getGreetings();
  }

  @Get('/greet')
  getHello(@Query('name') name?: string): string {
    return this.appService.getHello(name);
  }
}
