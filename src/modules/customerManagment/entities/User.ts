import { Entity } from '@shared/BaseEntity';
import { UserCPF } from './UserCPF';
import { UserLocale } from './UserLocale';
import { UserRG } from './UserRG';

export interface ICustomer {
  id?: string;
  name: string;
  cpf?: UserCPF;
  rg?: UserRG;
  locale: UserLocale;
}

export class Customer extends Entity<ICustomer> {}
