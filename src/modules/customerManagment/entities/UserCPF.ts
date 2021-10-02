import { ValueObject } from '@shared/ValueObject';

export interface IUserCPF{
	number: number;
}

export class UserCPF extends ValueObject<IUserCPF>{}
