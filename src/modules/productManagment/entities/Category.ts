import { ValueObject } from '@shared/ValueObject';

export interface ICategorie {
  id?: string;
  name: string;
  created_at?: Date;
  updated_at?: Date;
}

export class Category extends ValueObject<ICategorie> {}
