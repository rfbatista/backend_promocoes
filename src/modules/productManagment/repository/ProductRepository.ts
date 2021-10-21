import { EntityRepository, Repository } from 'typeorm';
import { ProductSchema } from '../schema/ProductSchema';

@EntityRepository(ProductSchema)
export class ProductRepository extends Repository<ProductSchema>{

}