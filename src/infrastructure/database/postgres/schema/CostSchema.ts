import {
  Column,
  Entity,
  ManyToOne,
  PrimaryColumn,
  CreateDateColumn,
} from 'typeorm';
import { Cost } from '@domain/entities/Cost';
import { ProductSchema } from './ProductSchema';
import { OrganizationSchema } from './OrganizationSchema';

export interface ICostSchema {
  id: string;
  value: number;
  created_at: Date;
}

@Entity()
export class CostSchema implements ICostSchema {
  @PrimaryColumn()
  id: string;

  @ManyToOne(() => ProductSchema, (product) => product.cost)
  product: ProductSchema;

  @Column({ update: false, nullable: false , type: "int"})
  value: number;

  @CreateDateColumn()
  created_at: Date;

  constructor(cost: Cost) {
    Object.assign(this, {
      value: cost.value,
      ...(cost.id && { id: cost.id }),
    });
  }

  toEntity() {
    return Cost.create(
      {
        value: this.value,
        createdAt: this.created_at,
      },
      this.id
    );
  }
}
