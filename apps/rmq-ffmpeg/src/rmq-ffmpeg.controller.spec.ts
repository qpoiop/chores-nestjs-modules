import { Test, TestingModule } from '@nestjs/testing';
import { RmqFfmpegController } from './rmq-ffmpeg.controller';
import { RmqFfmpegService } from './rmq-ffmpeg.service';

describe('RmqFfmpegController', () => {
  let rmqFfmpegController: RmqFfmpegController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [RmqFfmpegController],
      providers: [RmqFfmpegService],
    }).compile();

    rmqFfmpegController = app.get<RmqFfmpegController>(RmqFfmpegController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(rmqFfmpegController.getHello()).toBe('Hello World!');
    });
  });
});
