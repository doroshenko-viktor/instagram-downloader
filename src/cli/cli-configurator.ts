import { program } from "commander";
import testCommand from "./test-command";
import downloadAllImagesCommand from "./download-all-images-command";

const configure = () => {
    program
        .addCommand(downloadAllImagesCommand)
        .addCommand(testCommand);

    program.parse();
};

export default configure;