import { Result } from '../../shared/Result';

export interface IUseCase<Input, Output> {
  execute(input: Input): Promise<Result<Output>>;
}
