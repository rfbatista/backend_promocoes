import { Entity } from '@shared/BaseEntity';
import { Product } from './Product';
import { UniqueEntityId } from '../../shared/UniqueEntityId';

export interface ITag {
  title: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export class Tag extends Entity<ITag> {
  constructor(props: ITag, id?: UniqueEntityId) {
    super(props, id);
  }

  static create(props: ITag, id: string) {
    let uniqueIdentity: UniqueEntityId;
    if (id) uniqueIdentity = new UniqueEntityId(id);
    return new Tag(props, uniqueIdentity);
  }
}
