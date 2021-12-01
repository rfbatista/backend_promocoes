import * as dotenv from 'dotenv';
import { LoggerLevel } from './logger/Logger';

dotenv.config();

export const AppConfig = {
  http: {
    port: parseInt(process.env.PORT),
  },
  logger: {
    level: process.env.LOG_LEVEL ?? LoggerLevel.debug,
    hostname: {
      prefix: process.env.LOG_HOSTNAME_PREFIX,
    },
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  datasource: {
    postgres: {
      host: process.env.POSTGRES_HOST,
      database: process.env.POSTGRES_DATABASE,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD
    }
  }
};
