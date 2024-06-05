import { Repository } from 'typeorm';
import { Pagination } from '../../../recruitment-task/pagination';
import { ProductsRepository } from '../../../recruitment-task/ports';
import { Product } from '../../../recruitment-task/products/models/product';
import { ProductEntity } from '../entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';

const mapEntityToModel = ({
  id,
  description,
  image,
  name,
  quantity,
  price,
}: ProductEntity): Product =>
  new Product({
    id,
    description,
    image,
    name,
    quantity,
    price,
  });

const mapModelToEntity = (model: Product): ProductEntity => {
  return model.getProps();
};

export class TypeOrmProductsRepository implements ProductsRepository {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productsRepository: Repository<ProductEntity>,
  ) {}

  async find(pagination: Pagination): Promise<{
    hasMore: boolean;
    items: Product[];
    totalPages: number;
    totalItems: number;
  }> {
    const qb = this.productsRepository
      .createQueryBuilder('products')
      .take(pagination.getPerPage())
      .skip(pagination.getOffset());
    const [result, total] = await qb.getManyAndCount();

    return {
      hasMore: pagination.hasMore(total),
      totalPages: pagination.getTotalPages(total),
      items: result.map(mapEntityToModel),
      totalItems: total,
    };
  }

  async save(model: Product | Product[]): Promise<void> {
    let data: Product[];
    if (!Array.isArray(model)) {
      data = [model];
    } else {
      data = model;
    }
    await this.productsRepository.save(data.map(mapModelToEntity));
  }
}
