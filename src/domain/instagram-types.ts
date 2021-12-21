export type MediaType = "IMAGE" | "CAROUSEL_ALBUM";

export type MediaListData = {
    id: string;
    media_type: MediaType;
};

export type MediaData = {
    id: string;
    media_type: MediaType;
    media_url: string;
    timestamp: string;
    caption?: string;
};

export type Cursors = {
    before: string;
    after: string;
};

export type Paging = {
    cursors: Cursors
};

export type InstagramResponse<T> = {
    data: T[];
    paging: Paging;
};
