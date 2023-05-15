import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
    const app = await NestFactory.create(AppModule)

    const configService = app.get(ConfigService)
    const serverPort = configService.get<number>('SERVER_PORT')
    // const rabbitmqHost = configService.get<string>('RABBITMQ_HOST')
    // const rabbitmqUser = configService.get<string>('RABBITMQ_USER')
    // const rabbitmqPassword = configService.get<string>('RABBITMQ_PASSWORD')
    // const rabbitmqQueue = configService.get<string>('RABBITMQ_QUEUE_PROXY')
    // const rabbitmqPort = configService.get<number>('RABBITMQ_PORT')

    // app.connectMicroservice({
    //     transport: Transport.RMQ,
    //     options: {
    //         urls: [`amqp://${rabbitmqHost}:${rabbitmqPort}`],
    //         queue: rabbitmqQueue,
    //         queueOptions: {
    //             durable: false,
    //         },
    //         username: rabbitmqUser,
    //         password: rabbitmqPassword,
    //     },
    // })

    // await app.startAllMicroservices()
    await app.listen(serverPort, () => {
        console.log('http-client is running on port 3000')
    })
}

bootstrap()
