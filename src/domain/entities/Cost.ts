import { ValueObject } from '@shared/ValueObject';
import { UniqueEntityId } from '../../shared/UniqueEntityId';
import { Entity } from '../../shared/BaseEntity';

export interface ICost {
  value: number;
  createdAt: Date;
}

export class Cost extends Entity<ICost> {
  get id() {
    return this._id.toString();
  }

  get value() {
    return this.props.value;
  }

  constructor(props: ICost, id?: UniqueEntityId) {
    super(props, id);
  }
  static create(props: ICost, id?: string) {
    let uniqueID: UniqueEntityId;
    if (id) uniqueID = new UniqueEntityId(id);
    return new Cost(props, uniqueID);
  }
}
