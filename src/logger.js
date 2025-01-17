'use strict';

import winston from 'winston';
import path from 'node:path';

export const initLogger = (quiet, destination) => winston.createLogger({
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      ),
      level: quiet ? 'error' : 'info',
    }),
    new winston.transports.File({
      format: winston.format.json(),
      filename: path.join(destination, 'flump-output.log'),
      level: 'info',
    }),
  ],
});
