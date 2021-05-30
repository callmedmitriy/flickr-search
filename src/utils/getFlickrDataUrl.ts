const APIKey = process.env.REACT_APP_API_KEY || "";
const FLickrApi_sig = process.env.REACT_APP_FLICK_API_SIG || "";
const DEFAULT_URL = "https://api.flickr.com/services/rest";
const ITEMS_ON_PAGE = 20;
const CONTENT_TYPE = 7; // Search includes all types of images
const EXTRA_DATA = ['owner_name','date_upload','server_id'];

const getFlickrDataUrl = (text: string = "", page: number = 0) => {
    let flickrUrl = new URL(DEFAULT_URL)
    flickrUrl.searchParams.set('method','flickr.photos.search');
    flickrUrl.searchParams.set('api_key',APIKey);
    flickrUrl.searchParams.set('FLickrApi_sig',FLickrApi_sig);
    flickrUrl.searchParams.set('format','json');
    flickrUrl.searchParams.set('nojsoncallback','1');
    flickrUrl.searchParams.set('text', text);
    flickrUrl.searchParams.set('page', page.toString());
    flickrUrl.searchParams.set('per_page', ITEMS_ON_PAGE.toString());
    flickrUrl.searchParams.set('content_type', CONTENT_TYPE.toString());
    flickrUrl.searchParams.set('extras', EXTRA_DATA.join(','));

    return flickrUrl.href
}

export default getFlickrDataUrl;