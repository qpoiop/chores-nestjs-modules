import { Injectable } from '@nestjs/common';

@Injectable()
export class RmqProxyService {
  getHello(): string {
    return 'Hello World!';
  }
}
