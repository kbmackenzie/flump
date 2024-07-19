import winston from "winston";

export const initLogger = (debug) => winston.createLogger({
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      ),
      level: debug ? 'debug' : 'info',
    }),
    new winston.transports.File({
      format: winston.format.json(),
      filename: 'flump-output.log',
      level: debug ? 'debug' : 'info',
    }),
  ],
});
