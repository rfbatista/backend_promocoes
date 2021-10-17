import { AggregateRoot } from '@shared/AggregateRoot';
import { IDomainEvent } from '@shared/IDomainEvent';
import { UniqueEntityId } from '@shared/UniqueEntityId';
import { EventEmitter } from 'stream';

export class DomainEvents extends EventEmitter {
  constructor() {
    super();
  }
}
