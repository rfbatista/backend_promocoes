import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { IPrice, Price } from '../../../../domain/entities/Price';
import { ProductSchema } from './ProductSchema';

@Entity()
export class PriceSchema {
  @PrimaryColumn()
  id: number;
  @ManyToOne((type) => ProductSchema, (product) => product.price)
  product: ProductSchema;
  @Column({ update: false, nullable: false , type: "int"})
  value: number;
  @CreateDateColumn()
  created_at: Date;

  constructor(props) {}

  toEntity(): Price {
    return Price.create({}, this.id);
  }
}
