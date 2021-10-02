import { Entity } from '@shared/BaseEntity';

export interface IUserPromotion {
  id?: string;
  userId: string;
}

export class UserPromotion extends Entity<IUserPromotion>{}