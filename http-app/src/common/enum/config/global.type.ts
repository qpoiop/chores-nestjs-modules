export interface Config {
    server: ServerConfig
    cors: CorsConfig
    swagger: SwaggerConfig
    jwt: JwtConfig
}
export interface ServerConfig {
    host: string
    port: number | string
}
export interface CorsConfig {
    enabled: boolean
}
export interface SwaggerConfig {
    enabled: boolean
}
export interface JwtConfig {
    secret: string
    expiresIn: string
    refreshIn: string
    bcryptSaltOrRound: string | number
}
