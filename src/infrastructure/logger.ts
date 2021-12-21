import chalk from "chalk";
import winston, { LoggerOptions } from "winston";

const configuration: LoggerOptions = {
    "transports": [
        new winston.transports.Console()
    ]
};

export const log = winston.createLogger(configuration);

const info = async (message: string) => {
    return chalk.gray(message);
};

const warn = async (message: string) => {
    return chalk.bold.cyan(message);
};

const err = async (message: string) => {
    return chalk.bold.red(message);
};

export const fmt = { info, warn, err };

export default log;