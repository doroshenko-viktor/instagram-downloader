import { getStreamed } from "../../infrastructure/image-downloader";
import { save } from "../../infrastructure/file-manager";

export default async (url: string, filename: string) => {
    const imageStream = await getStreamed(url);
    save(filename, imageStream);
};