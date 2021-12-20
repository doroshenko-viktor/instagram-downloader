import chalk from "chalk";

export const info = async (message: string) => {
    const formattedMessage = chalk.gray(message);
    console.info(formattedMessage);
};

export const warn = async (message: string) => {
    const formattedMessage = chalk.bold.cyan(message);
    console.warn(formattedMessage);
};

export const err = async (message: string) => {
    const formattedMessage = chalk.bold.red(message);
    console.warn(formattedMessage);
};

export default { info, warn, err };