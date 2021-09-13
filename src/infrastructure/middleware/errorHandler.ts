import { ErrorRequestHandler, Request, Response, NextFunction } from "express";
import { Logger } from '../Logger';

const errorHandler: ErrorRequestHandler = (
	error: HttpErrorObject,
	req: Request,
	res: Response,
	next: NextFunction
  ): any => {
	  if(error){

	Logger.error(error.message);
  
	const response: any = {
	  message: error.message,
	  status: error.status || StatusCodes.INTERNAL_SERVER_ERROR,
	};
  
	res.status(response.status).send(response);
	  }
  
	next();
  };