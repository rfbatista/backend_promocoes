import { Entity } from '@shared/BaseEntity';
import { UniqueEntityId } from '@shared/UniqueEntityId';

export interface IUserAccessToken{
	id?: UniqueEntityId;
	token: string;
	createdAt: Date;
	updatedAt: Date;
}

export class UserAccessToken extends Entity<IUserAccessToken>{}