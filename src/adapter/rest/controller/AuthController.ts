import { Service } from 'di/lib';
import { NextFunction, Request, Response, Router } from 'express';
import { IController, requestOutput } from '../IController';
import { UserLoginUseCase } from '../../../application/ commands/UseCase/UserLoginUseCase';
import { loginRequestMapping } from '../request/auth/loginRequest';
import { Logger } from '@infrastructure/logger/Logger';

@Service()
export class AuthController implements IController {
  route: string = '/auth';

  constructor(private loginUseCase: UserLoginUseCase) {}

  getRouter(): Router {
    const router = Router();
    router.get(`${this.route}/login`);
    return router;
  }

  login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const input = loginRequestMapping(req);
      const output = await this.loginUseCase.execute(input);
      return requestOutput(output, res)
    } catch (error) {
      Logger.error('AuthController.login', error);
    }
  };
}
