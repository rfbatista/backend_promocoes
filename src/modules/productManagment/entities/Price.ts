import { ValueObject } from '@shared/ValueObject';
import { Entity } from '../../../shared/BaseEntity';

export interface IPrice{
	value: number;
	createdAt: Date;
}

export class Price extends Entity<IPrice>{}