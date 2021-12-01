import express from 'express';
import { AppConfig } from './AppConfig';
import { Logger } from './logger/Logger';
import { connectPostgres } from './database/postgres/postgres';

export class HttpServer {
  static async start() {
    const config = AppConfig.http;
    const app = express();
    await connectPostgres();
    app.listen(config.port, () => {
      Logger.info(`Express server running - PORT: ${config.port}`);
    });
  }
}
