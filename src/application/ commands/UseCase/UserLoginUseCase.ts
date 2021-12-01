import { TokenJwt } from '@domain/entities/TokenJWT';
import { Email } from '@domain/entities/valueObjects/Email';
import { UserPassword } from '@domain/entities/valueObjects/UserPassword';
import { UserRepository } from '@infrastructure/database/postgres/repository/UserRepository';
import { Result } from '@shared/Result';
import { Service } from 'di/lib';
import { IUseCase } from '../IUseCase';
import { CreateProductUseCaseInput } from './CreateProductUseCase';
import { applicationErrorAlias } from '../../applicationError/applicationErrorAlias';

export type UserLoginUseCaseInput = {
  email: string;
  password: string;
};

export type UserLoginUseCaseOutput = any;

@Service()
export class UserLoginUseCase
  implements IUseCase<UserLoginUseCaseInput, UserLoginUseCaseOutput>
{
  constructor(private userRepo: UserRepository) {}

  async execute(
    input: UserLoginUseCaseInput
  ): Promise<Result<UserLoginUseCaseOutput>> {
    const emailOrError = Email.create({ email: input.email });
    if (emailOrError.isFailure) return emailOrError;
    const passwordOrError = UserPassword.create({ password: input.password });
    const userOrError = await this.userRepo.findByEmail(
      emailOrError.getValue()
    );
    if (userOrError.isSuccess) {
      const user = userOrError.getValue();
      if (user.password.equals(passwordOrError.getValue())) {
        const token = TokenJwt.generate({
          organizationId: user.organization.id,
          organizationName: user.organization.name,
          userId: user.id,
          email: user.email,
        });
        return Result.ok(token);
      } else {
        return Result.fail(applicationErrorAlias.wrong_password);
      }
    }
    return userOrError;
  }
}
