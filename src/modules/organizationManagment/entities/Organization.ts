import { AggregateRoot } from '../../../shared/AggregateRoot';

export interface IOrganization {
	name: string;
	createdAt: Date;
}

export class Organization extends AggregateRoot<void>{}