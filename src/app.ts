#! /usr/bin/env node
import { program } from "commander";
import chalk from "chalk";

const action = () => {
    console.log(chalk.blue.italic("action executing"));
    console.log(chalk.red.bold("formatted message"));
};

program.command('test').description('test option').action(action);

program.parse();