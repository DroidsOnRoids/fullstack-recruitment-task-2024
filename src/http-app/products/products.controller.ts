import { Controller, Get, Inject, Query } from '@nestjs/common';
import { GetProductRequestDto } from './dto/get-products-request.dto';
import { GetProductResponseDto } from './dto/get-products-response.dto';
import { ProductsRepository } from '../../recruitment-task/ports';
import { GetPaginatedProducts } from '../../recruitment-task/products/use-cases/get-paginated-products';
import { Pagination } from '../../recruitment-task/pagination';
import { ProductDto } from './dto/product.dto';

@Controller('products')
export class ProductsController {
  constructor(
    @Inject(GetPaginatedProducts)
    private readonly getPaginatedProducts: GetPaginatedProducts,
  ) {}

  @Get()
  async get(
    @Query() input: GetProductRequestDto,
  ): Promise<GetProductResponseDto> {
    const { hasMore, items, totalItems, totalPages } =
      await this.getPaginatedProducts.call({
        pagination: new Pagination(input),
      });

    return {
      hasMore,
      items: items.map(ProductDto.createFromModel),
      totalItems,
      totalPages,
    };
  }
}
