export interface IRepository<T> {
  getById(id: number): Promise<T>;
  save(entity: T): void;
  delete(entity: T): void;
  update(entity: T): void;
}
