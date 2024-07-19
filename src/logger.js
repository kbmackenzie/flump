import winston from "winston";
import { join as joinPath } from 'node:path';

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
      filename: joinPath(destination, 'flump-output.log'),
      level: 'info',
    }),
  ],
});
