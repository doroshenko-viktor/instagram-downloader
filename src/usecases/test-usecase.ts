import { getStreamed } from "../infrastructure/image-downloader";
import { save } from "../infrastructure/file-manager";
import log from "../infrastructure/logger";


export default async (url: string, filename: string) => {
    log.info(`url: ${url}`);
    log.warn(`file name: ${filename}`);
    log.err("some error");
    // const imageStream = await getStreamed(url);
    // save(filename, imageStream);
};