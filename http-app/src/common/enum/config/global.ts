import { Config } from './global.type'

const globalConfig = {
    server: {
        host: '',
        port: process.env.SERVER_PORT || 3000,
    },
    cors: {
        enabled: true,
    },
    swagger: {
        enabled: true,
    },
    jwt: {
        secret: process.env.JWT_SECRET_KEY || '',
        expiresIn: '2m',
        refreshIn: '3d',
        bcryptSaltOrRound: 10,
    },
}

export default (): Config => globalConfig
