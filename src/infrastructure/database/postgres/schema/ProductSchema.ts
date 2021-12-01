import { Organization } from '@domain/entities/Organization';
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
import { BarCode } from '../../../../domain/entities/BarCode';
import { Category } from '../../../../domain/entities/Category';
import { Cost } from '../../../../domain/entities/Cost';
import { Price } from '../../../../domain/entities/Price';
import { IProduct, Product } from '../../../../domain/entities/Product';
import { Tag } from '../../../../domain/entities/Tag';
import { CostSchema } from './CostSchema';
import { PriceSchema } from './PriceSchema';
import { TagSchema } from './TagSchema';
import { ImageSchema } from './ImageSchema';
import { OrganizationSchema } from '@infrastructure/database/postgres/schema/OrganizationSchema';
import { CategorySchema } from './CategorySchema';
import { DateTime } from 'luxon';
import { UserSchame } from './UserSchema';
import { ManyToOne } from 'typeorm';

export interface IProductSchema {
  id: string;
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
  id: string;

  @Column()
  organization: OrganizationSchema;

  @ManyToOne(type => UserSchame)
  updated_by: UserSchame;

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

  constructor(props: Product) {
    this.id = props.id;
    Object.assign(this, {...{
      organization: new OrganizationSchema(props.organization),
      title: props.title,
      is_published: props.isPublished,
      price: new PriceSchema(props.price),
      categories: CategorySchema.arrayToSchema(props.categories),
      images: ImageSchema.arrayToSchema(props.images),
      BarCode: props.barCode,
      cost: props.cost,
      description: props.description,
      updated_by: new UserSchame(props.user), 
      updated_at: DateTime.now().toSQL()
    }})
  }

  toEntity(): Product {
    return Product.create({
      organization: this.organization.toEntity(),
      title: this.title,
      isPublished: this.is_published,
      price: new PriceSchema(this.price).toEntity(),
      description: this?.description,
      categories: this.categories && CategorySchema.arrayToEntity(this.categories),
      images: this.images && ImageSchema.arrayToEntity(this.images),
      barCode: this.barCode && new BarCode(this.barCode),
      tags: this.tags && TagSchema.fromArrayToEntity(this.tags),
      cost: this.cost && this.cost?.toEntity(),
      created_at: new Date(this.created_at),
      updatedBy: this.updated_by.toEntity().getValue(),
      updated_at: new Date(this.updated_at)
    }, this.id).getValue()
  }
}
