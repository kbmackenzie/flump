import winston from "winston";

export const initLogger = (quiet) => winston.createLogger({
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
      filename: 'flump-output.log',
      level: 'info',
    }),
  ],
});
