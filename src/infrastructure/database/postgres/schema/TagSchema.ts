import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ProductSchema } from './ProductSchema';
import { Tag } from '@domain/entities/Tag';

@Entity()
export class TagSchema {
  @PrimaryColumn()
  id: string;
  @ManyToMany(() => ProductSchema, (product) => product.tags)
  product?: number;
  @Column()
  title: string;
  @CreateDateColumn()
  created_at?: Date;
  @UpdateDateColumn()
  updated_at?: Date;

  toEntity() {
    return Tag.create(
      {
        title: this.title,
        createdAt: this.created_at,
        updatedAt: this.updated_at,
      },
      this.id
    );
  }

  static fromArrayToEntity(schemas: TagSchema[]): Tag[] {
    const entities = [];
    for (const schema of schemas) {
      entities.push(schema.toEntity());
    }
    return entities;
  }
}
