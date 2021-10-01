import { UniqueEntityId } from '@shared/UniqueEntityId';

export interface IDomainEvent {
  dateTimeOccurred: Date;
  getAggregateId(): UniqueEntityId;
}
