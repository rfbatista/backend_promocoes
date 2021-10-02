import { ValueObject } from '@shared/ValueObject';

export interface IUserLocale {
  street: string;
  number: string;
  city: string;
  state: string;
  contry: string;
}

export class UserLocale extends ValueObject<IUserLocale> {}
