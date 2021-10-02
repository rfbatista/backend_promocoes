import { Entity } from '@shared/BaseEntity';
import { Guard, IGuardResult } from '@shared/Guard';
import { Result } from '@shared/Result';
import { UniqueEntityId } from '@shared/UniqueEntityId';
import { Categorie } from './Categorie';

type Image = {
  description: string;
  url: string;
}

export interface IProduct {
  id?: number;
  name: string;
  description?: string;
  price: number;
  categorie?: Categorie;
  images?: Image[];
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
      { argumentName: 'name', argument: props.name },
    ]);

    if (chatUserPropsResult.succeeded) {
      return Result.ok<Product>(new Product(props, id));
    } else {
      return Result.fail<Product>('Missing props in PRODUCT');
    }
  }
}
