import { Entity } from '@shared/BaseEntity';
import { UniqueEntityId } from '@shared/UniqueEntityId';
import { User } from './User';
import { v4 as uuuiv4 } from 'uuid';

export interface IUserToken {
  user: User;
  token: string;
  expirationDate: Date;
  createdAt: Date;
}

export class UserToken extends Entity<IUserToken> {
  get id() {
    return this._id.toString();
  }
  get user() {
    return this.props.user;
  }
  get token() {
    return this.props.token;
  }
  get expirationDate() {
    return this.props.expirationDate;
  }

  constructor(props: IUserToken, id?: UniqueEntityId) {
    super(props, id);
  }

  static create(props: IUserToken, id?: string) {
    return new UserToken(props, id ? new UniqueEntityId(id) : undefined);
  }

  static generate(props: User){
    const token_uuid = uuuiv4();
  }

}
