import { Inject, Injectable } from '@nestjs/common'
import { ClientProxy } from '@nestjs/microservices'

@Injectable()
export class AppService {
    constructor(@Inject('RABBITMQ_PROXY') private client: ClientProxy) {
        client.connect()
    }

    async echo(payload: string) {
        return this.client.send({ cmd: 'echo' }, payload)
    }
}
