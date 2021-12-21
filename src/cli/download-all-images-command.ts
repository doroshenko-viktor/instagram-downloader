import { Command } from "commander";
import downloadAllImagesUsecase from "../usecases/download-all-images-usecase";

const command = new Command()
    .command("download")
    .arguments("<token> [path]")
    .description("download all images from user instagram account by provided token")
    .action(downloadAllImagesUsecase);

export default command;