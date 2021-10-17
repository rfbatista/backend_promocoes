import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { Cost, ICost } from '../entities/Cost';
import { ProductSchema } from './ProductSchema';
import { OrganizationSchema } from '../../organizationManagment/schemas/OrganizationSchema';

@Entity()
export class CostSchema implements ICost{
	@PrimaryColumn()
	id: number;

	organization: OrganizationSchema;

	@ManyToOne(() => ProductSchema, product => product.cost)
	product:ProductSchema;
	
	@Column()
	value: number;

	@Column()
	createdAt: Date;
}