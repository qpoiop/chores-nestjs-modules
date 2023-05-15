import { Injectable } from '@nestjs/common';

@Injectable()
export class RmqFfmpegService {
  getHello(): string {
    return 'Hello World!';
  }
}
