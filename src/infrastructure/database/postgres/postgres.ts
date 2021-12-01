import { AppConfig } from '@infrastructure/AppConfig';
import { getConnectionManager, ConnectionManager, Connection } from 'typeorm';

export const connectPostgres = async () => {
  const connectionManager = getConnectionManager();
  const connection = connectionManager.create({
    type: 'postgres',
    host: AppConfig.datasource.postgres.host,
    port: 5432,
    username: AppConfig.datasource.postgres.user,
    password: AppConfig.datasource.postgres.password,
    database: AppConfig.datasource.postgres.database,
  });
  await connection.connect(); // performs connection
};
