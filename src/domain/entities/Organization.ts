import { UniqueEntityId } from '@shared/UniqueEntityId';
import { AggregateRoot } from '../../shared/AggregateRoot';

export interface IOrganization {
  name: string;
  createdAt: Date;
}

export class Organization extends AggregateRoot<IOrganization> {
  get name() {
    return this.props.name;
  }
  get createdAt() {
    return this.props.createdAt;
  }

  constructor(props: IOrganization, id?: UniqueEntityId) {
    super(props, id);
  }

  static create(props: IOrganization, id?: string) {
    return new Organization(props, id ? new UniqueEntityId(id) : undefined);
  }
}
