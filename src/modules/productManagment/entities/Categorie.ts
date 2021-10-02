import { ValueObject } from '@shared/ValueObject';

export interface ICategorie {
  id?: string;
  name: string;
  created_at?: Date;
  updated_at?: Date;
}

export class Categorie extends ValueObject<ICategorie> {}
