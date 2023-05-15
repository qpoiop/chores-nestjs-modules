import { Module } from '@nestjs/common'
import { ClientsModule, Transport } from '@nestjs/microservices'
import { AppController } from './app.controller'
import { AppService } from './app.service'

@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'RABBITMQ_PROXY',
                transport: Transport.RMQ,
                options: {
                    urls: [process.env.RABBITMQ_HOST],
                    queue: process.env.RABBITMQ_QUEUE,
                },
            },
        ]),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
