import { Product } from '../../../recruitment-task/products/models/product';

export class ProductDto {
  id: string;
  name: string;
  description: string;
  image: string;
  quantity: number;

  static createFromModel(model: Product): ProductDto {
    return model.getProps();
  }
}
