import { Entity } from '@shared/BaseEntity';
import { Guard } from '@shared/Guard';
import { Result } from '@shared/Result';
import { UniqueEntityId } from '@shared/UniqueEntityId';
import { ValueObject } from '../../../shared/ValueObject';

export interface IUserPassword {
  password: string;
}

export class UserPassword extends ValueObject<IUserPassword> {
  static create(props: IUserPassword) {
    return Result.ok(new UserPassword(props));
  }
}
