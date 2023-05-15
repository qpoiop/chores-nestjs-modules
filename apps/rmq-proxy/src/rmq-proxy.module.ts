import { Module } from '@nestjs/common';
import { Transport } from '@nestjs/microservices/enums';
import { ClientsModule } from '@nestjs/microservices/module';
import { RmqProxyController } from './rmq-proxy.controller';
import { RmqProxyService } from './rmq-proxy.service';

@Module({
  imports: [
        ClientsModule.register([
            {
                name: 'WORKER_SERVICE',
                transport: Transport.RMQ,
                options: {
                    urls: [process.env.RABBITMQ_HOST],
                    queue: process.env.RABBITMQ_QUEUE,
                },
            },
        ]),
    ],
  controllers: [RmqProxyController],
  providers: [RmqProxyService],
})
export class RmqProxyModule {}
