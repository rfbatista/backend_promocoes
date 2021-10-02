import { Entity } from '@shared/BaseEntity';

export interface IProductPromotion {
  id?: string;
  productId: string;
}

export class ProductPromotion extends Entity<IProductPromotion> {}
