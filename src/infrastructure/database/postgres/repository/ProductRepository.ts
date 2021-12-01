import { Product } from '@domain/entities/Product';
import { Logger } from '@infrastructure/logger/Logger';
import { Repository, getConnection, getRepository } from 'typeorm';
import { ProductSchema } from '../schema/ProductSchema';

export class ProductRepository {
  private repo: Repository<ProductSchema>;
  constructor() {
    this.repo = getConnection().getRepository(ProductSchema);
  }
  async create(product: Product) {
    try {
      const productRepo = getRepository(ProductSchema);
      const schema = new ProductSchema(product);
      productRepo.save(schema);
    } catch (error) {
      Logger.error('ProductRepository.create', error);
    }
  }
}
