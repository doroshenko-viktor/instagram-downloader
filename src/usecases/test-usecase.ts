// import { getStreamed } from "../infrastructure/image-downloader";
// import { save } from "../infrastructure/file-manager";
import log from "../infrastructure/logger";
import { getUserMediaList } from "../infrastructure/instagram-client";

export default async (url: string, filename: string) => {
    log.info(`url: ${url}`);
    log.info(`file name: ${filename}`);
    getUserMediaList('<token>');
    // const imageStream = await getStreamed(url);
    // save(filename, imageStream);
};