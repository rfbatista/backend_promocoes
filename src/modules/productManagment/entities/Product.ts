import { Entity } from '@shared/BaseEntity';
import { Guard, IGuardResult } from '@shared/Guard';
import { Result } from '@shared/Result';
import { UniqueEntityId } from '@shared/UniqueEntityId';
import { BarCode } from './BarCode';
import { Category as Category } from './Category';
import { Tag } from './Tag';
import { Cost } from './Cost';
import { Organization } from '@modules/organizationManagment/entities/Organization';
import { Price } from './Price';

type Image = {
  description: string;
  url: string;
}

export interface IProduct {
  id?: number;
  organization: Organization;
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
  public static create(
    props: IProduct,
    id?: UniqueEntityId
  ): Result<Product> {
    const chatUserPropsResult: IGuardResult = Guard.againstNullOrUndefinedBulk([
      { argumentName: 'price', argument: props.price },
      { argumentName: 'name', argument: props.title },
      { argumentName: 'isPublished', argument: props.isPublished },
    ]);

    if (chatUserPropsResult.succeeded) {
      return Result.ok<Product>(new Product(props, id));
    } else {
      return Result.fail<Product>('Missing props in PRODUCT');
    }
  }
}
