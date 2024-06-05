import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { SwaggerConfig } from '../config';
import metadata from '../metadata';

export const initSwagger = async (
  app: INestApplication,
  config: SwaggerConfig,
) => {
  await SwaggerModule.loadPluginMetadata(metadata);
  const document = SwaggerModule.createDocument(
    app,
    new DocumentBuilder()
      .setTitle(config.title)
      .setVersion(config.version)
      .build(),
  );

  SwaggerModule.setup(config.path, app, document);
};
