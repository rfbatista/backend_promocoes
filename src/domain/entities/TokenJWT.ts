import { AppConfig } from '@infrastructure/AppConfig';
import jwt from 'jsonwebtoken';

export class TokenJwt {
  static generate(payload: any): string {
    return jwt.sign(payload, AppConfig.jwt.secret);
  }
  static decode(token: string): any {
    return jwt.decode(token);
  }
}
