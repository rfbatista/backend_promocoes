import { User } from '@domain/entities/User';
import { Email } from '@domain/entities/valueObjects/Email';
import { Result } from '@shared/Result';
import { Service } from 'di/lib';
import { getRepository } from 'typeorm';
import { UserSchame } from '../schema/UserSchema';

@Service()
export class UserRepository {
  async create() {}

  async findByEmail(email: Email): Promise<Result<User>> {
    try {
      const userRepo = getRepository(UserSchame);
      const user = await userRepo.findOne({ email: email.address });
      return user
        ? user.toEntity()
        : Result.fail('Não foi possivel encontrar o usuario');
    } catch (error) {}
  }
}
