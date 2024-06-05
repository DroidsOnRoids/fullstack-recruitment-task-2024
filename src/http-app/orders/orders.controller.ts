import { Controller, Get } from '@nestjs/common';

@Controller('orders')
export class OrdersController {
  @Get('shipping-cost')
  async calculateShippingCost() {
    return 0;
  }
}
