import { AggregateRoot } from '@shared/AggregateRoot';
import { UniqueEntityId } from '@shared/UniqueEntityId';
import { UserDeleted } from '../../infrastructure/events/UserDeleted';
import { UserPassword } from './valueObjects/UserPassword';
import { Guard } from '../../shared/Guard';
import { Result } from '@shared/Result';
import { UserToken } from './UserToken';
import { Organization } from './Organization';

export interface IUser {
  organization?: Organization;
  name: string;
  email: string;
  password: UserPassword;
  isDeleted?: boolean;
  accessToken?: UserToken;
  createdAt: Date;
}

export class User extends AggregateRoot<IUser> {
  get id() {
    return this._id;
  }

  get organization() {
    return this.props.organization;
  }

  get name() {
    return this.props.name;
  }

  get email() {
    return this.props.email;
  }

  get password() {
    return this.props.password;
  }

  public delete(): void {
    if (!this.props.isDeleted) {
      this.addDomainEvent(new UserDeleted(this));
      this.props.isDeleted = true;
    }
  }

  public updatePassword(password) {
    this.props.password = new UserPassword(password);
    return Result.ok();
  }

  public static create(props: IUser, id?: UniqueEntityId) {
    const notNullProps = Guard.againstNullOrUndefinedBulk([
      { argumentName: 'name', argument: props.name },
      { argumentName: 'password', argument: props.password },
    ]);

    if (!notNullProps.succeeded) {
      return Result.fail<User>(
        'Você tem que definir todas as props do usuario'
      );
    }

    return Result.ok<User>(new User(props, id));
  }
}
