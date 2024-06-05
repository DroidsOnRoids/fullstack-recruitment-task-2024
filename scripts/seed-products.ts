import { AppModule } from '../src/app.module';
import { NestFactory } from '@nestjs/core';
import { ProductsRepository } from '../src/recruitment-task/ports';
import { Product } from '../src/recruitment-task/products/models/product';
import { faker } from '@faker-js/faker';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule, {
    logger: false,
  });
  const repository = await app.get<ProductsRepository>(ProductsRepository);

  const models = Array.from({
    length: 120,
  }).map(
    () =>
      new Product({
        id: faker.string.uuid(),
        description: faker.commerce.productDescription(),
        name: faker.commerce.productName(),
        image: faker.image.url({ width: 480, height: 480 }),
        quantity: faker.number.int({ min: 0, max: 10 }),
        price: faker.number.float({ fractionDigits: 2, min: 20, max: 100 }),
      }),
  );
  await repository.save(models);
}

bootstrap();
