import { Entity } from '@shared/BaseEntity';
import { UserCPF } from './CustomerCPF';
import { UserLocale } from './CustomerLocale';
import { UserRG } from './CustomerRG';

export interface ICustomer {
  id?: string;
  name: string;
  cpf?: UserCPF;
  rg?: UserRG;
  locale: UserLocale;
}

export class Customer extends Entity<ICustomer> {}
