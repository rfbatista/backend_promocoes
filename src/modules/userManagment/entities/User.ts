import { AggregateRoot } from '@shared/AggregateRoot';
import { UniqueEntityId } from '@shared/UniqueEntityId';
import { UserDeleted } from '../events/UserDeleted';
import { UserPassword } from './UserPassword';
import { Guard } from '../../../shared/Guard';
import { Result } from '@shared/Result';
import { UserAccessToken } from './UserAccessToken';

export interface IUser {
  id?: UniqueEntityId;
  organizationId: UniqueEntityId;
  name: string;
  password: UserPassword;
  isDeleted?: boolean;
  accessToken: UserAccessToken;
}

export class User extends AggregateRoot<IUser> {
  public delete(): void {
    if (!this.props.isDeleted) {
      this.addDomainEvent(new UserDeleted(this));
      this.props.isDeleted = true;
    }
  }

  public updatePassword(password) {
    const userPasswordOrError = UserPassword.create(password);
    if (!userPasswordOrError.isSuccess) {
      return userPasswordOrError;
    }
	this.props.password = userPasswordOrError.getValue()
	return Result.ok()
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
