import { Column, Entity } from 'typeorm';
import { IOrganization } from '../entities/Organization';

@Entity()
export class OrganizationSchema implements IOrganization{
	@Column()
	name: string;
	@Column()
	createdAt: Date;
	
}