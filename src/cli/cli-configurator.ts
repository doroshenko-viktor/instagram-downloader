import { program } from "commander";
import testAction from "../app/usecases/test-usecase";

const configure = () => {
    program
        .command('test <url> <filename>')
        .description('test option')
        .action(testAction);

    program.parse();
};

export default configure;