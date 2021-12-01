import { Entity } from '@shared/BaseEntity';
import { Guard, IGuardResult } from '@shared/Guard';
import { Result } from '@shared/Result';
import { UniqueEntityId } from '@shared/UniqueEntityId';
import { BarCode } from './BarCode';
import { Category as Category } from './Category';
import { Tag } from './Tag';
import { Cost } from './Cost';
import { Organization } from '@domain/entities/Organization';
import { Price } from './Price';
import { Image } from './Image';
import { User } from './User';

export interface IProduct {
  id?: string;
  organization: Organization;
  updatedBy: User;
  title: string;
  isPublished: boolean;
  price: Price;
  description?: string;
  categories?: Category[];
  images?: Image[];
  barCode?: BarCode;
  tags?: Tag[];
  cost?: Cost;
  created_at?: Date;
  updated_at?: Date;
}

export class Product extends Entity<IProduct> {
  get id() {
    return this._id.toString();
  }

  get organization() {
    return this.props.organization;
  }

  get user() {
    return this.props.updatedBy;
  }

  get title() {
    return this.props.title;
  }

  get isPublished() {
    return this.props.isPublished;
  }

  get price() {
    return this.props.price;
  }

  get description() {
    return this.props.description;
  }

  get categories() {
    return this.props.categories;
  }

  get images() {
    return this.props.images;
  }

  get barCode() {
    return this.props.barCode;
  }

  get tags() {
    return this.props.tags;
  }

  get cost() {
    return this.props.cost;
  }

  get createdAt() {
    return this.props.created_at;
  }

  get updatedAt() {
    return this.props.updated_at;
  }

  public static create(props: IProduct, id?: string): Result<Product> {
    const chatUserPropsResult: IGuardResult = Guard.againstNullOrUndefinedBulk([
      { argumentName: 'price', argument: props.price },
      { argumentName: 'name', argument: props.title },
      { argumentName: 'isPublished', argument: props.isPublished },
    ]);

    let uniqueId: UniqueEntityId;
    if (id) uniqueId = new UniqueEntityId(id);

    if (chatUserPropsResult.succeeded) {
      return Result.ok<Product>(new Product(props, uniqueId));
    } else {
      return Result.fail<Product>('Missing props in PRODUCT');
    }
  }
}
