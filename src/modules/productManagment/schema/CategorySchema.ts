import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class CategorySchema {
	@PrimaryColumn()
	id?: string;

	@Column()
	name: string;

	@CreateDateColumn()
	created_at?: Date;

	@UpdateDateColumn()
	updated_at?: Date;
}