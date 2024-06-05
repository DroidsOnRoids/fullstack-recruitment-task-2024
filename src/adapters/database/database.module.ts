import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigProvider } from '../../config';
import { ProductEntity } from './entities/product.entity';
import { ProductsRepository } from '../../recruitment-task/ports';
import { TypeOrmProductsRepository } from './repositories/products.repository';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => {
        return {
          ...ConfigProvider.database,
          autoLoadEntities: true,
          dropSchema: false,
          logging: false,
          namingStrategy: new SnakeNamingStrategy(),
          synchronize: false,
        };
      },
    }),
    TypeOrmModule.forFeature([ProductEntity]),
  ],
  providers: [
    {
      provide: ProductsRepository,
      useClass: TypeOrmProductsRepository,
    },
  ],
  exports: [ProductsRepository],
})
export class DatabaseModule {}
