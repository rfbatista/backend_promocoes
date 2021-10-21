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
import { IProduct, Product } from '../entities/Product';
import { Tag } from '../entities/Tag';
import { CostSchema } from './CostSchema';
import { PriceSchema } from './PriceSchema';
import { TagSchema } from './TagSchema';
import { ImageSchema } from './ImageSchema';
import { OrganizationSchema } from '@modules/organizationManagment/schemas/OrganizationSchema';
import { CategorySchema } from './CategorySchema';

export interface IProductSchema {
  id?: number;
  organization: OrganizationSchema;
  title: string;
  is_published: boolean;
  price: PriceSchema;
  categories?: CategorySchema[];
  images?: ImageSchema[];
  BarCode?: string;
  cost?: CostSchema;
  description?: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}
@Entity('product')
export class ProductSchema implements IProductSchema {
  @PrimaryColumn()
  id?: number;

  @Column()
  organization: OrganizationSchema;

  @Column()
  title: string;

  @Column()
  is_published: boolean;

  @OneToMany((type) => PriceSchema, (price) => price.product, {
    cascade: ['insert', 'remove'],
    nullable: false,
    eager: true
  })
  price: PriceSchema;

  @Column()
  description?: string;

  @ManyToMany((type) => Category, {
    nullable: true,
    eager: true
  })
  @JoinTable({
    name: 'product_categories',
    joinColumn: { name: 'product', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'category', referencedColumnName: 'id' },
  })
  categories?: CategorySchema[];

  @OneToMany((type) => ImageSchema, (image) => image.product, {
    nullable: true,
  })
  images?: ImageSchema[];

  @Column()
  barCode?: string;

  @ManyToMany(() => TagSchema, (tags) => tags.product, {
    cascade: ['insert'],
    nullable: true,
    eager: true
  })
  @JoinTable({
    name: 'product_categories', // table name for the junction table of this relation
    joinColumn: {
      name: 'productId',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'categoryId',
      referencedColumnName: 'id',
    },
  })
  tags?: TagSchema[];

  @OneToMany(() => CostSchema, (cost) => cost.product, {
    onDelete: 'CASCADE',
    cascade: ['insert', 'remove'],
    nullable: true,
    eager: true
  })
  cost?: CostSchema;

  @CreateDateColumn()
  created_at?: Date;

  @UpdateDateColumn()
  updated_at?: Date;

  @DeleteDateColumn()
  deleted_at?: Date;

  constructor(props: IProductSchema, id?: number) {
    Object.assign(this, {...props, id})
  }

  toEntity(): Product {
    return Product.create({
      organization: null,
      title: this.title,
      isPublished: this.is_published,
      price: new PriceSchema(this.price).toEntity(),
      description: this.description,
      categories: 
      images?: Image[];
      barCode?: BarCode;
      tags?: Tag[];
      cost?: Cost;
      created_at?: Date;
      updated_at?: Date;
    }, this.id).getValue()
  }
}
