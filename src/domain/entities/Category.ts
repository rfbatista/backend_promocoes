import { ValueObject } from '@shared/ValueObject';
import { Entity } from '../../shared/BaseEntity';

export interface ICategory {
  name: string;
  created_at?: Date;
  updated_at?: Date;
}

export class Category extends Entity<ICategory> {
  get id() {
    return this._id.toString();
  }
  get name() {
    return this.props.name;
  }
}
