import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../adapters/database/database.module';
import { GetPaginatedProducts } from './use-cases/get-paginated-products';

@Module({
  imports: [DatabaseModule],
  providers: [GetPaginatedProducts],
  exports: [GetPaginatedProducts],
})
export class ProductsModule {}
