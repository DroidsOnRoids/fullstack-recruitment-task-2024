import { ProductDto } from './product.dto';

export class GetProductResponseDto {
  items: ProductDto[];
  hasMore: boolean;
  totalPages: number;
  totalItems: number;
}
