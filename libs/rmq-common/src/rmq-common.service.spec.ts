import { Test, TestingModule } from '@nestjs/testing';
import { RmqCommonService } from './rmq-common.service';

describe('RmqCommonService', () => {
  let service: RmqCommonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RmqCommonService],
    }).compile();

    service = module.get<RmqCommonService>(RmqCommonService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
