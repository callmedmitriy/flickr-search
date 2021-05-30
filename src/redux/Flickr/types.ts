export interface FlickrState {
    isLoading: boolean;
    error?: string;
    query?: string;
    data?: FlickrData;
}

export interface FlickrData {
    photos: {
        page: number;
        pages: number;
        perpage: number;
        total: number;
        photo: FlickrPhoto[];
    }
}

export interface FlickrPhoto {
    id: string;
    owner: string;
    secret: string;
    server: string;
    farm: number;
    title: string;
    dateupload: string;
    ownername: string;
}
