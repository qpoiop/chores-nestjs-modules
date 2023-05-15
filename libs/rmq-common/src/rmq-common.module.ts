import { Module } from '@nestjs/common';
import { RmqCommonService } from './rmq-common.service';

@Module({
  providers: [RmqCommonService],
  exports: [RmqCommonService],
})
export class RmqCommonModule {}
