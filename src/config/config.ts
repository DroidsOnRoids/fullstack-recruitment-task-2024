import {
  DatabaseConfig,
  HealthCheckConfig,
  LoggerConfig,
  SentryConfig,
  SwaggerConfig,
} from '.';

export interface IConfig {
  appName: string;
  swagger: SwaggerConfig;
  sentry: SentryConfig;
  healthcheck: HealthCheckConfig;
  logger: LoggerConfig;
  database: DatabaseConfig;
}

export const ConfigProvider: IConfig = (() => {
  const swaggerPath = '/api';
  const healthcheckPath = '/health';

  return {
    appName: 'BoilerPlate',
    swagger: {
      path: swaggerPath,
      version: '1.0.0',
      title: 'Example Api Documentation',
    },
    sentry: {
      dsn: process.env.SENTRY_DSN,
      init: {
        tracesSampleRate: 0.05,
      },
      ignorePath: [swaggerPath, healthcheckPath],
    },
    healthcheck: {
      path: healthcheckPath,
    },
    logger: {
      level: 'debug',
      loggly: {
        stripColors: true,
        token: 'd7e9f7c9-7e3f-4a74-8081-0046049ff6ae',
        subdomain: 'droidsonroids',
        tags: ['fullstack-recruitment-task-2024'],
        json: true,
        timestamp: true,
      },
    },
    database: {
      type: 'postgres',
      host: process.env.POSTGRES_HOST || 'db',
      port: Number(process.env.POSTGRES_PORT) || 5432,
      username: process.env.POSTGRES_USER || 'postgres',
      password: process.env.POSTGRES_PASSWORD || 'secret',
      database: process.env.POSTGRES_DB || 'fullstack-recruitment-task-2024',
    },
  };
})();
