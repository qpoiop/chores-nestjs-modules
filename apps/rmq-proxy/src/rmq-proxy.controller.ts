import { Controller, Get } from '@nestjs/common';
import { RmqProxyService } from './rmq-proxy.service';

@Controller()
export class RmqProxyController {
  constructor(private readonly rmqProxyService: RmqProxyService) {}

  @Get()
  getHello(): string {
    return this.rmqProxyService.getHello();
  }
}
