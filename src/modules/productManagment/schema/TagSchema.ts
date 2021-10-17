import { Entity, ManyToMany } from 'typeorm';
import { ITag } from '../entities/Tag';
import { ProductSchema } from './ProductSchema';

@Entity()
export class TagSchema {
	@ManyToMany(() => ProductSchema, product => product.tags)
	product?: number;
	title: string;
	createdAt?: Date;
	updatedAt?: Date;
}