import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { RmqProxyModule } from './rmq-proxy.module';

async function bootstrap() {
    const app = await NestFactory.createMicroservice<MicroserviceOptions>(RmqProxyModule, {
        transport: Transport.RMQ,
        options: {
            urls: ['amqp://localhost:5672'],
            queue: 'proxy_queue',
            queueOptions: {
                durable: false,
            },
            prefetchCount: 1,
        },
    })

    await app.listen()
}
bootstrap();
