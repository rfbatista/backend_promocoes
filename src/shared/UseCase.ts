import { Result } from './Result';

export interface UseCase<Input, Output> {
  execute(input: Input): Promise<Result<Output>>;
}

export class UseCaseOutput<T> {
  public isSuccess: boolean;
  public isFailure: boolean;
  public error: T | string;
  private _value: T;

  public constructor(isSuccess: boolean, error?: T | string, value?: T) {
    if (isSuccess && error) {
      throw new Error(
        'InvalidOperation: A result cannot be successful and contain an error'
      );
    }
    if (!isSuccess && !error) {
      throw new Error(
        'InvalidOperation: A failing result needs to contain an error message'
      );
    }
    this.isSuccess = isSuccess;
    this.isFailure = !isSuccess;
    this.error = error;
    this._value = value;
    Object.freeze(this);
  }

  public getValue(): T {
    if (!this.isSuccess) {
      throw new Error(
        "Can't get the value of an error result. Use 'errorValue' instead."
      );
    }
    return this._value;
  }

  public errorValue(): T {
    return this.error as T;
  }

  public static ok<U>(value?: U): UseCaseOutput<U> {
    return new UseCaseOutput<U>(true, null, value);
  }

  public static fail<U>(error: any): UseCaseOutput<U> {
    return new UseCaseOutput<U>(false, error);
  }

  public static combine(results: UseCaseOutput<any>[]): UseCaseOutput<any> {
    for (let result of results) {
      if (result.isFailure) return result;
    }
    return UseCaseOutput.ok<any>();
  }
}
