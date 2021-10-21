import { Result } from '@shared/Result';
import { UseCase } from '@shared/UseCase';

export type CreateProductUseCaseInput = {};

export type CreateProductUseCaseOutput = {};

export class CreateProductUseCase
  implements UseCase<CreateProductUseCaseInput, CreateProductUseCaseOutput>
{
  execute(
    input: CreateProductUseCaseInput
  ): Promise<Result<CreateProductUseCaseOutput>> {
    throw new Error('Method not implemented.');
  }
}
