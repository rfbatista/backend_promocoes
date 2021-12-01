import {
  PrimaryColumn,
  ManyToOne,
  RelationId,
  Column,
  CreateDateColumn,
} from 'typeorm';
import { UserSchame } from './UserSchema';
import { UserToken } from '../../../../domain/entities/UserToken';
import { DateTime } from 'luxon';
import { User } from '@domain/entities/User';

export interface IUserTokenSchema {
  id: string;
  token_uuid: string;
  expiration_date: string;
  created_at: string;
}

export class UserTokenSchema implements IUserTokenSchema {
  @PrimaryColumn()
  id: string;
  @ManyToOne((type) => UserSchame)
  user: UserSchame;
  @Column()
  token_uuid: string;
  @Column()
  expiration_date: string;
  @CreateDateColumn()
  created_at: string;

  constructor(entity: UserToken) {
    Object.assign(this, {
      user: new UserSchame(entity.user),
      token_uuid: entity.token,
      expiration_date: DateTime.fromJSDate(entity.expirationDate).toSQL(),
    });
  }

  toEntity() {
    return UserToken.create({
      user: this.user.toEntity().getValue(),
      token: this.token_uuid,
      expirationDate: new Date(this.expiration_date),
      createdAt: new Date(this.created_at),
    });
  }
}
