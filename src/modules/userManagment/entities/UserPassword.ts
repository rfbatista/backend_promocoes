import { Entity } from '@shared/BaseEntity';
import { Guard } from '@shared/Guard';
import { Result } from '@shared/Result';
import { UniqueEntityId } from '@shared/UniqueEntityId';

export interface IUserPassword {
  userId: UniqueEntityId;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

export class UserPassword extends Entity<IUserPassword> {
  public static create(props: IUserPassword, id?: UniqueEntityId){
    const passwordMinimumLength = Guard.againstAtLeast(6, props.password)
    if(passwordMinimumLength.succeeded){
      return Result.ok<UserPassword>(new UserPassword(props, id))
    } else {
      return Result.fail<UserPassword>('Definir senha com mais de 6 caracteres')
    }
  }
}
