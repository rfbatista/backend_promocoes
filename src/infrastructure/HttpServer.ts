import express from 'express';
import { AppConfig } from './AppConfig';
import { Logger } from './Logger';

export class HttpServer{
	static start() {
		const config = AppConfig.http;
		const app = express();
		
		app.listen(config.port, () => {
			Logger.info(`Express server running - PORT: ${config.port}`);
		});
	  }
}