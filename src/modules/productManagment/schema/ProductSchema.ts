import { Organization } from '@modules/organizationManagment/entities/Organization';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { BarCode } from '../entities/BarCode';
import { Category } from '../entities/Category';
import { Cost } from '../entities/Cost';
import { Price } from '../entities/Price';
import { IProduct } from '../entities/Product';
import { Tag } from '../entities/Tag';
import { CostSchema } from './CostSchema';
import { PriceSchema } from './PriceSchema';
import { TagSchema } from './TagSchema';
import { ImageSchema } from './ImageSchema';
import { OrganizationSchema } from '@modules/organizationManagment/schemas/OrganizationSchema';
import { CategorySchema } from './CategorySchema';

@Entity('product')
export class ProductSchema {
  @PrimaryColumn()
  id?: number;

  @Column()
  organization: OrganizationSchema;

  @Column()
  title: string;

  @Column()
  is_published: boolean;

  @OneToMany(type => PriceSchema, price => price.product)
  price: PriceSchema;

  @Column()
  description?: string;

  @ManyToMany((type) => Category)
  @JoinTable({
    name: 'product_categories',
    joinColumn: { name: 'product', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'category', referencedColumnName: 'id' },
  })
  categories?: CategorySchema[];

  @OneToMany(type => ImageSchema, image => image.product)
  images?: { description: string; url: string }[];

  @Column()
  barCode?: BarCode;

  @ManyToMany(() => TagSchema, (tags) => tags.product, {
    cascade: false,
  })
  @JoinTable()
  tags?: TagSchema[];

  @OneToMany(() => CostSchema, (cost) => cost.product)
  cost?: CostSchema;

  @CreateDateColumn()
  created_at?: Date;

  @UpdateDateColumn()
  updated_at?: Date;

  @DeleteDateColumn()
  deleted_at?: Date;
}
