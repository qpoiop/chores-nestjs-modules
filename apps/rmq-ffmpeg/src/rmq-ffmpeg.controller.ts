import { Controller, Get } from '@nestjs/common';
import { RmqFfmpegService } from './rmq-ffmpeg.service';

@Controller()
export class RmqFfmpegController {
  constructor(private readonly rmqFfmpegService: RmqFfmpegService) {}

  @Get()
  getHello(): string {
    return this.rmqFfmpegService.getHello();
  }
}
