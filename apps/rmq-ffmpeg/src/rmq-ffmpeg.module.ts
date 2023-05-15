import { Module } from '@nestjs/common';
import { RmqFfmpegController } from './rmq-ffmpeg.controller';
import { RmqFfmpegService } from './rmq-ffmpeg.service';

@Module({
  imports: [],
  controllers: [RmqFfmpegController],
  providers: [RmqFfmpegService],
})
export class RmqFfmpegModule {}
