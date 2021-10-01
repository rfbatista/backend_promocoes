import { Entity } from '@shared/BaseEntity';
import { Guard, IGuardResult } from '@shared/Guard';
import { Result } from '@shared/Result';
import { UniqueEntityId } from '@shared/UniqueEntityId';

type Image = {
  description: string;
  url: string;
}

export type IProduct = {
  id?: number;
  type: string;
  description: string;
  price: number;
  images: Image[];
  created_at?: Date;
  updated_at?: Date;
}

export class Product extends Entity<IProduct> {
  public static create(
    props: IProduct,
    id?: UniqueEntityId
  ): Result<IProduct> {
    const chatUserPropsResult: IGuardResult = Guard.againstNullOrUndefinedBulk([
      { argumentName: 'platformName', argument: props.platformName },
      { argumentName: 'platformUserId', argument: props.platformUserId },
      { argumentName: 'platformUserName', argument: props.platformUserName },
    ]);

    if (chatUserPropsResult.succeeded) {
      return Result.ok<ChatUser>(new ChatUser(props, id));
    } else {
      return Result.fail<ChatUser>('Missing props in chat user');
    }
  }
}
