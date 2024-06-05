import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { HealthCheckController } from './health-check.controller';
import { CustomHttpExceptionFilter, HttpExceptionFilter } from './filters';
import { DomainErrorFilter } from './domain-error.filter';
import { ProductsController } from './products/products.controller';
import { RecruitmentTaskModule } from '../recruitment-task/recruitment-task.module';

@Module({
  imports: [RecruitmentTaskModule],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    {
      provide: APP_FILTER,
      useClass: CustomHttpExceptionFilter,
    },
    {
      provide: APP_FILTER,
      useClass: DomainErrorFilter,
    },
  ],
  controllers: [HealthCheckController, ProductsController],
})
export class HttpAppModule {}
