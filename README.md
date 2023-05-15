.
├── README.md
├── apps
│   ├── rmq-ffmpeg
│   │   ├── src
│   │   │   ├── rmq-ffmpeg.controller.spec.ts
│   │   │   ├── rmq-ffmpeg.controller.ts
│   │   │   ├── rmq-ffmpeg.module.ts
│   │   │   ├── rmq-ffmpeg.service.ts
│   │   │   └── main.ts
│   │   ├── test
│   │   │   ├── app.e2e-spec.ts
│   │   │   └── jest-e2e.json
│   │   ├── DockerFile
│   │   └── tsconfig.app.json
│   ├── rmq-proxy
│   │   ├── src
│   │   │   ├── rmq-proxy.controller.spec.ts
│   │   │   ├── rmq-proxy.controller.ts
│   │   │   ├── rmq-proxy.module.ts
│   │   │   ├── rmq-proxy.service.ts
│   │   │   └── main.ts
│   │   ├── test
│   │   │   ├── app.e2e-spec.ts
│   │   │   └── jest-e2e.json
│   │   ├── DockerFile
│   │   └── tsconfig.app.json
│   └── rmq-scheduler
│       ├── src
│       │   ├── main.ts
│       │   ├── rmq-scheduler.controller.spec.ts
│       │   ├── rmq-scheduler.controller.ts
│       │   ├── rmq-scheduler.module.ts
│       │   └── rmq-scheduler.service.ts
│       ├── test
│       │   ├── app.e2e-spec.ts
│       │   └── jest-e2e.json
│       ├── DockerFile
│       └── tsconfig.app.json
├── dist
│   └── apps
│       ├── rmq-ffmpeg
│       │   └── main.js
│       ├── rmq-proxy
│       │   └── main.js
│       └── rmq-scheduler
│           └── main.js
├── libs
│   └── rmq-common
│       ├── src
│       │   ├── rmq-common.module.ts
│       │   ├── rmq-common.service.spec.ts
│       │   ├── rmq-common.service.ts
│       │   └── index.ts
│       └── tsconfig.lib.json
├── docker-compose.yml
├── rabbitmq.config
├── nest-cli.json
├── package.json
├── tsconfig.build.json
├── tsconfig.json
├── yarn.lock
└── http-app
    ├── src
    │   ├── http-app.module.ts
    │   ├── http-app.service.spec.ts
    │   ├── http-app.service.ts
    │   └── main.ts
    ├── tsconfig.json
    ├── tsconfig.build.json
    └── package.json