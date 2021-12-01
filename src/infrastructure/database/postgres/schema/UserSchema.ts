import { User } from '@domain/entities/User';
import { UserPassword } from '@domain/entities/valueObjects/UserPassword';
import { DateTime } from 'luxon';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

export interface IUserSchema {
  id: string;
  name: string;
  password: string;
  createdAt: string;
  updatedAt: string;
}

@Entity()
export class UserSchame {
  @PrimaryColumn()
  id: string;
  @Column()
  name: string;
  @Column({ unique: true })
  email: string;
  @Column()
  password: string;
  @CreateDateColumn()
  created_at: string;
  @UpdateDateColumn()
  updated_at: string;

  constructor(entity: User) {
    Object.assign(this, {
      name: entity.name,
      email: entity.email,
      password: entity.password,
      updatedAt: DateTime.now().toSQL(),
      ...(entity.id && { id: entity.id }),
    });
  }

  toEntity() {
    return User.create({
      name: this.name,
      email: this.email,
      password: new UserPassword({ password: this.password }),
      createdAt: new Date(this.created_at),
    });
  }
}
