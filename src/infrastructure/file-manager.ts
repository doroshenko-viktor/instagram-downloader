import { Readable } from "stream";
import fs from "fs";

export const save = (filename: string, stream: Readable) => {
    const fileWriteStream = fs.createWriteStream(filename);
    stream.pipe(fileWriteStream);
};