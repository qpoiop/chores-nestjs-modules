import { Test, TestingModule } from '@nestjs/testing';
import { RmqProxyController } from './rmq-proxy.controller';
import { RmqProxyService } from './rmq-proxy.service';

describe('RmqProxyController', () => {
  let rmqProxyController: RmqProxyController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [RmqProxyController],
      providers: [RmqProxyService],
    }).compile();

    rmqProxyController = app.get<RmqProxyController>(RmqProxyController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(rmqProxyController.getHello()).toBe('Hello World!');
    });
  });
});
