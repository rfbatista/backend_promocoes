import { ValueObject } from '@shared/ValueObject'

export interface ICost{
	value: number;
	createdAt: Date;
}

export class Cost extends ValueObject<ICost>{}