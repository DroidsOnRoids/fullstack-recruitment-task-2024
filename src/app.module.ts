import { Module } from '@nestjs/common';
import { HttpAppModule } from './http-app/http-app.module';

@Module({
  imports: [HttpAppModule],
})
export class AppModule {}
