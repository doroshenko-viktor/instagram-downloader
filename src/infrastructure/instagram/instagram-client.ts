import axios from "axios";
import log from "../logger";
import { InstagramResponse, MediaData, MediaListData } from "./instagram-types";

export const getUserMediaList = async (token: string): Promise<MediaListData[]> => {
    log.info("requesting list of user media");
    const fields = 'id,media_type';
    const url = `https://graph.instagram.com/me/media?fields=${fields}&access_token=${token}`;
    const response = await get<InstagramResponse<MediaListData>>(url);
    return response.data;
};

export const getMediaChildren = async (mediaId: number, token: string): Promise<MediaListData[]> => {
    log.info("retrieving media children");
    const fields = 'id,media_type';
    const url = `https://graph.instagram.com/${mediaId}/children?fields=${fields}&access_token=${token}`;
    const response = await get<InstagramResponse<MediaListData>>(url);
    return response.data;
};

export const getMedia = async (mediaId: number, token: string): Promise<MediaData> => {
    log.info("retrieving media object");
    const fields = "id,media_type,media_url,username,timestamp,caption";
    const url = `https://graph.instagram.com/${mediaId}?fields=${fields}&access_token=${token}`;
    return get<MediaData>(url);
};

async function get<T>(url: string): Promise<T> {
    try {
        const response = await axios.get<T>(url);
        return response.data;
    }
    catch (error) {
        log.error(error);
        throw error;
    }
}