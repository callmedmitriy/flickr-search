import { createAsyncThunk } from '@reduxjs/toolkit';

import { FlickrData } from './types';
import { AppDispatch } from '../../store';
import { ApplicationState } from '../rootReducer';
import getFlickrDataUrl from '../../utils/getFlickrDataUrl';

interface ThunkConfig {
    dipsatch: AppDispatch;
    state: ApplicationState;
    rejectValue: string;
}

interface FlickrDataParams {
    query: string;
    page?: number;
}

export const getFlcikrData = createAsyncThunk<FlickrData, FlickrDataParams, ThunkConfig>(
    'flickr/getFlcikrData',
    async ({ query, page }) => {
        if (!query) {
            throw 'Empty query';
        }
        const URL = getFlickrDataUrl(query, page);
        const response = await fetch(URL);
        return (await response.json()) as FlickrData;
    },
);
