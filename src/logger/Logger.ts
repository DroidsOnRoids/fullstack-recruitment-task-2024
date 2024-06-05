import { LoggerConfig } from '../config';
import { LoggerService } from '@nestjs/common';
import { ClearLogger } from './ClearLogger';
import { WinstonLogger } from './WinstonLogger';

export let logger: LoggerService = new ClearLogger();

export enum LoggerType {
  CLEAR = 'clear',
  WINSTON = 'winston',
}

export const initLogger = (type: LoggerType, config: LoggerConfig) => {
  switch (type) {
    case LoggerType.WINSTON:
      logger = new WinstonLogger(config);
      break;
    default:
      logger = new ClearLogger();
  }
};
