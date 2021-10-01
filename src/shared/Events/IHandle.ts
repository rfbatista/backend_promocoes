export interface IHandler<DomainEvent> {
  handle(event: DomainEvent): void;
}
