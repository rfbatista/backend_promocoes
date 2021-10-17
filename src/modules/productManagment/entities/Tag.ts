import { Entity } from '@shared/BaseEntity';
import { Product } from './Product';

export interface ITag {
  product?: Product;
  title: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export class Tag extends Entity<ITag> {}
