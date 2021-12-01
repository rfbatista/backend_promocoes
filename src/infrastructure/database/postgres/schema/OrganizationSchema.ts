import { Column, Entity, CreateDateColumn, PrimaryColumn } from 'typeorm';
import { Organization } from '../../../../domain/entities/Organization';

export interface IOrganizationSchema {
  id: string;
  name: string;
  created_at: string;
}

@Entity()
export class OrganizationSchema implements IOrganizationSchema {
  @PrimaryColumn()
  id: string;
  @Column()
  name: string;
  @CreateDateColumn()
  created_at: string;

  constructor(props: Organization, id?: string) {
    Object.assign(this, {
      ...{
        name: props,
      },
      id: id,
    });
  }

  toEntity() {
    return Organization.create(
      {
        name: this.name,
        createdAt: new Date(this.created_at),
      },
      this.id
    );
  }
}
