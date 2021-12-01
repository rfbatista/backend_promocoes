import { DateTime } from 'luxon';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Category } from '../../../../domain/entities/Category';

export interface ICategorySchema {
  id: string;
  name: string;
  updated_at?: string;
  created_at?: Date;
}

@Entity()
export class CategorySchema {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @CreateDateColumn()
  created_at?: string;

  @UpdateDateColumn()
  updated_at?: string;

  constructor(raw: Category) {
    Object.assign(this, {
      name: raw.name,
      updated_at: DateTime.now().toSQL(),
      ...(raw.id && { id: raw.id }),
    });
  }

  static arrayToSchema(entities: Category[]) {
    const categoriesList = [];
    for (const category of entities) {
      categoriesList.push(new CategorySchema(category));
    }
    return categoriesList;
  }

  static arrayToEntity(schemas: CategorySchema[]): Category[] {
    const categoriesList = [];
    for (const schema of schemas) {
      categoriesList.push(schema.toEntity());
    }
    return categoriesList;
  }

  toEntity() {
    return new Category({
      name: this.name,
      updated_at: new Date(this.updated_at),
      created_at: new Date(this.created_at),
    });
  }
}
