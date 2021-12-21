import { MediaData } from "../domain/instagram-types";
import { save } from "../infrastructure/file-manager";
import { getStreamed } from "../infrastructure/image-downloader";
import { getAllMediaResolvers } from "../services/media-resolver";
import path from 'path';
import fs from "fs";

export default async (token: string, path?: string) => {
    const targetPath = getPath(path);
    createDirIfNotExist(targetPath);
    const resolvers = await getAllMediaResolvers(token);
    for (const resolve of resolvers) {
        const medias = await resolve();
        await saveMediaImages(medias, targetPath);
    }
};

async function saveMediaImages(medias: MediaData[], path: string) {
    for (const media of medias) {
        const imageStream = await getStreamed(media.media_url);
        const fileName = getFileName(path, media);
        save(fileName, imageStream);
    }
}

function getFileName(targetPath: string, media: MediaData): string {
    const fileName = `${media.timestamp}-${media.id}.jpg`;
    const absFileName = path.join(targetPath, fileName);
    return absFileName;
}

function getPath(userPath?: string): string {
    if (userPath) {
        // if (userPath === "~") {
        //     userPath = path.resolve(process.env.HOME as string);
        // }
        return path.resolve(userPath);
    }
    const curDirAbsPath = path.resolve(process.cwd());
    return path.join(curDirAbsPath, "instagram-downloaded");
}

function createDirIfNotExist(dirPath: string) {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath);
    }
}