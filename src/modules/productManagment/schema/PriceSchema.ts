import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { IPrice, Price } from '../entities/Price';
import { ProductSchema } from './ProductSchema';

@Entity()
export class PriceSchema {
  @PrimaryColumn()
  id: number;
  @ManyToOne((type) => ProductSchema, (product) => product.price)
  product: ProductSchema;
  @Column()
  value: number;
  @CreateDateColumn()
  createdAt: Date;

  constructor(props) {}

  toEntity(): Price {
    return Price.create({}, this.id);
  }
}
