import winston from "winston";

export const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || "info",
  format: winston.format.json(),
  transports: [
    new winston.transports.Console({ format: winston.format.simple() }),
    new winston.transports.File({ filename: "log/error.log", level: "error" }),
    new winston.transports.File({ filename: "log/debug.log", level: "debug" })
  ],
})

export default logger;
