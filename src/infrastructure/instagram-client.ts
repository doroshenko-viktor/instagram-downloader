import axios from "axios";
import log from "../infrastructure/logger";

type GetUserMediaListFields = "id" | "media_type" | "media_url" | "username" | "timestamp";

type InstagramData = {
    id?: string;
    media_type?: string;
    media_url?: string;
    timestamp?: string;
    caption?: string;
};



type InstagramResponse = {
    "data": InstagramData[],
    "paging": string
}

export const getUserMediaList = async (token: string) => {
    log.info("requesting list of user media");
    // ,media_type,media_url,timestamp,caption
    const fields = 'id,caption,media_type,timestamp';
    // const url = `https://graph.instagram.com/me/media?fields=${fields}&access_token=${token}`;
    // const url = `https://graph.instagram.com/17912135066275208?fields=id,media_type,media_url,username,timestamp&access_token=${token}`;
    const url = `https://graph.instagram.com/17920003517109058/children?access_token=${token}`;
    try {
        const res = await axios.get<InstagramResponse>(url);
        log.info("received response");
        log.info(JSON.stringify(res.data));
    }
    catch (error) {
        console.error(error);
    }
};

// item type may be "IMAGE" or "CAROUSEL_ALBUM"

// "17920003517109058" carousel
// "17909674538331317" image