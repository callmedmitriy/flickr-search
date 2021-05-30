export enum PHOTO_SIZES {
    small = 'n',
}

interface UrlParams {
    server: string;
    id: string;
    secret: string;
    sizeSuffix?: PHOTO_SIZES;
}

const DEFAULT_URL = 'https://live.staticflickr.com';
const DEFAULT_FORMAT = '.jpg';

const getImageUrl = ({ server, id, secret, sizeSuffix = PHOTO_SIZES.small }: UrlParams): string => {
    return `${DEFAULT_URL}/${server}/${id}_${secret}_${sizeSuffix}${DEFAULT_FORMAT}`;
};

export default getImageUrl;
