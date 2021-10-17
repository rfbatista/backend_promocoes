import { Product } from './Product';
import { Entity } from '../../../shared/BaseEntity';

export interface IImage{
	product: Product;
	url: string;
	createdAt: Date;
}

export class Image extends Entity<IImage>{}