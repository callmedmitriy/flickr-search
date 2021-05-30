import { combineReducers } from 'redux';

import flickrReducer, { flickrTypes } from './Flickr'

export type ApplicationState = {
    flickr: flickrTypes.FlickrState;
}

export default combineReducers<ApplicationState>({
    flickr: flickrReducer,
});
