import { program } from "commander";
import testCommand from "./test-command";

const configure = () => {
    program
        .addCommand(testCommand);

    program.parse();
};

export default configure;