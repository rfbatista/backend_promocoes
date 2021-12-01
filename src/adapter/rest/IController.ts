import { Result } from '@shared/Result';
import { Response, Router } from 'express';
import { StatusCodes } from 'http-status-codes';

export interface IController {
  route: string;
  getRouter(): Router;
}

export const requestOutput = (result: Result<any>, res: Response) => {
  return ok(result, res);
};

export const ok = <OutputUseCase>(
  output: Result<OutputUseCase> | Result<OutputUseCase>,
  response: Response
) => {
  if (output.getValue()) {
    return response.status(StatusCodes.OK).json(serialize(output.getValue()));
  } else {
    return response.sendStatus(StatusCodes.NO_CONTENT);
  }
};

export const badRequest = <OutputUseCase>(
  response: Response,
  output: Result<OutputUseCase> | Result<OutputUseCase>
) => {
  return response.status(StatusCodes.BAD_REQUEST).json(output.getValue());
};

const serialize = (obj: any) => {
  for (const key in obj) {
    if (obj[key] === '' || obj[key] === null) {
      delete obj[key];
    }

    if (typeof obj[key] === 'object') {
      obj[key] = serialize(obj[key]);
    }
  }

  return obj;
};
