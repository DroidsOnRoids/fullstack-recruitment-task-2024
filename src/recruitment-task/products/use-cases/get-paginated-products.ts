import { Inject } from '@nestjs/common';
import { Pagination } from '../../pagination';
import { ProductsRepository } from '../../ports';
import { UseCase } from '../../use-case';
import { Product } from '../models/product';

interface GetPaginatedProductsInput {
  pagination: Pagination;
}
interface GetPaginatedProductsOutput {
  items: Product[];
  hasMore: boolean;
  totalPages: number;
  totalItems: number;
}

export class GetPaginatedProducts
  implements
    UseCase<GetPaginatedProductsInput, Promise<GetPaginatedProductsOutput>>
{
  constructor(
    @Inject(ProductsRepository)
    private readonly productsRepository: ProductsRepository,
  ) {}

  async call({ pagination }: GetPaginatedProductsInput) {
    return this.productsRepository.find(pagination);
  }
}
