import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { RmqFfmpegModule } from './rmq-ffmpeg.module';

async function bootstrap() {
    const app = await NestFactory.createMicroservice<MicroserviceOptions>(RmqFfmpegModule, {
        transport: Transport.RMQ,
        options: {
            urls: ['amqp://localhost:5672'],
            queue: 'encoder_queue',
            queueOptions: {
                durable: false,
            },
            prefetchCount: 1,
        },
    })

    await app.listen()
}
bootstrap();
