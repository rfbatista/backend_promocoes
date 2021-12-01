import 'reflect-metadata';
import 'module-alias/register';
import { HttpServer } from './infrastructure/HttpServer';

HttpServer.start();
