import { UserLoginUseCaseInput } from '../../../../application/ commands/UseCase/UserLoginUseCase';

export const loginRequestMapping = (req: any): UserLoginUseCaseInput => {
  return {
    email: req.body.email,
    password: req.body.password,
  };
};