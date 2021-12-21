import { Command } from "commander";
import testAction from "../usecases/test-usecase";

const command = new Command()
    .command("test")
    // .arguments("<url> <filename>")
    .description("test command")
    .action(testAction);

export default command;