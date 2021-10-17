import { Entity, ManyToOne, Column, CreateDateColumn, PrimaryColumn } from 'typeorm';
import { IImage } from '../entities/Image';
import { Product } from '../entities/Product';
import { ProductSchema } from './ProductSchema';

@Entity()
export class ImageSchema {
	@PrimaryColumn()
	id: number;
	@ManyToOne(type => ProductSchema, product => product.images)
	product: Product;
	@Column()
	url: string;
	@CreateDateColumn()
	createdAt: Date;
}