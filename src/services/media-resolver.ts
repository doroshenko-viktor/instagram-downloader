import { MediaData } from "../domain/instagram-types";
import instagramClient from "../infrastructure/instagram-client";
import log from "../infrastructure/logger";

export type MediaResolver = () => Promise<MediaData[]>;

export const getAllMediaResolvers = async (token: string): Promise<MediaResolver[]> => {
    const mediaList = await instagramClient.getUserMediaList(token);
    return mediaList.map(media => {
        if (media.media_type === "CAROUSEL_ALBUM") {
            return () => getCarouselMediaData(media.id, token);
        } else if (media.media_type === "IMAGE") {
            return () => getImageMediaData(media.id, token);
        } else {
            log.warn(`unknown media type: ${media.media_type}`);
            return () => getUnknownMediaData();
        }
    });
};


async function getCarouselMediaData(mediaId: string, token: string): Promise<MediaData[]> {
    const children = await instagramClient.getMediaChildren(mediaId, token);
    const medias: MediaData[] = [];
    for (const x of children) {
        medias.push(await instagramClient.getMedia(x.id, token));
    }
    return medias;
}


async function getImageMediaData(mediaId: string, token: string): Promise<MediaData[]> {
    return [await instagramClient.getMedia(mediaId, token)];
}

function getUnknownMediaData(): Promise<MediaData[]> {
    return Promise.resolve([]);
}
