import { ValueObject } from '@shared/ValueObject';

export interface UserRG {
  number: number;
}

export class UserRG extends ValueObject<UserRG> {}
