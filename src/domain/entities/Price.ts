import { ValueObject } from '@shared/ValueObject';
import { Entity } from '../../shared/BaseEntity';
import { UniqueEntityId } from '../../shared/UniqueEntityId';

export interface IPrice {
  value: number;
  createdAt: Date;
}

export class Price extends Entity<IPrice> {
  private constructor(props, id?: UniqueEntityId) {
    super(props, id);
  }
  static create(props, id?: number) {
    const uniqueId = new UniqueEntityId(id);
    return new Price(props, uniqueId);
  }
}
