type ProductConstructorArgs = {
  id: string;
  name: string;
  description: string;
  image: string;
  quantity: number;
  price: number;
};

export class Product {
  private id: string;
  private name: string;
  private description: string;
  private image: string;
  private quantity: number;
  private price: number;

  constructor({
    id,
    name,
    description,
    image,
    quantity,
    price,
  }: ProductConstructorArgs) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.image = image;
    this.quantity = quantity;
    this.price = price;
  }

  getProps() {
    const propsCopy = {
      id: this.id,
      name: this.name,
      description: this.description,
      image: this.image,
      quantity: this.quantity,
      price: this.price,
    };
    return propsCopy;
  }
}
