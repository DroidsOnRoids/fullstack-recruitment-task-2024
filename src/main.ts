import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigProvider } from './config/config';
import { initSwagger } from './swagger';
import { initLogger, LoggerType } from './logger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  initSwagger(app, ConfigProvider.swagger);
  initLogger(LoggerType.WINSTON, ConfigProvider.logger);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: false,
      stopAtFirstError: true,
    }),
  );

  await app.listen(3000);
}
bootstrap();
