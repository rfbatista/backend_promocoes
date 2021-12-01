import { IDomainEvent } from '@shared/IDomainEvent';
import { UniqueEntityId } from '@shared/UniqueEntityId';
import { User } from '../../domain/entities/User';

export class UserDeleted implements IDomainEvent{
	public dateTimeOccurred: Date;
	private user: User

	constructor(user: User){
		this.dateTimeOccurred = new Date();
		this.user = user;
	}

	getAggregateId(): UniqueEntityId {
		return this.user.id;
	}
}