import { Pagination } from '../../pagination';
import { Product } from '../../products/models/product';

type FindResponse = {
  hasMore: boolean;
  items: Product[];
  totalPages: number;
  totalItems: number;
};

export abstract class ProductsRepository {
  abstract find(pagination: Pagination): Promise<FindResponse>;
  abstract save(model: Product | Product[]): Promise<void>;
}
