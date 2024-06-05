import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';

const domainModules = [ProductsModule];
@Module({
  imports: [...domainModules],
  exports: [...domainModules],
})
export class RecruitmentTaskModule {}
