import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('products')
export class ProductEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ type: 'varchar', length: 50 })
  name: string;
  @Column({ type: 'text' })
  description: string;
  @Column({ type: 'varchar', length: 256 })
  image: string;
  @Column({ type: 'int', default: 0 })
  quantity: number;
  @Column({ type: 'double precision', default: 0 })
  price: number;
}
