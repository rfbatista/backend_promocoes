import { ICategory } from '@domain/entities/Category';
import { Image } from '@domain/entities/Image';
import { IOrganization, Organization } from '@domain/entities/Organization';
import { ITag } from '@domain/entities/Tag';
import { IUser, User } from '@domain/entities/User';
import { Result } from '@shared/Result';
import { UseCase } from '@shared/UseCase';

export type CreateProductUseCaseInput = {
  organization: Organization;
  updatedBy: User;
  title: string;
  isPublished: boolean;
  price: number;
  description?: string;
  categories?: ICategory[];
  images?: Image[];
  barCode?: string;
  tags?: ITag[];
  cost?: number;
};

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
