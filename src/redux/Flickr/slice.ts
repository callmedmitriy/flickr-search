import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FlickrState } from './types';
import { getFlcikrData } from './operations';

const initialState: FlickrState = {
    isLoading: false,
};

const flickrSlice = createSlice({
    name: 'flickrSlice',
    initialState,
    reducers: {
        changeSearchQuery(state, {payload}: PayloadAction<string | undefined>) {
            state.query = payload;
            state.data = undefined;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getFlcikrData.fulfilled, (state, { payload }) => {
        if (state.data) {
            const photos = [...state.data.photos.photo, ...payload.photos.photo];
            let newState: FlickrState = {
                ...state,
                isLoading: false,
                data: {
                    ...payload,
                    photos: {
                        ...payload.photos,
                        photo: photos
                    }
                }
            }
            return newState;
        } else {
            return {
                ...state,
                isLoading: false,
                data: payload,
            }
        }
        });
        builder.addCase(getFlcikrData.pending, (state) => ({
            ...state,
            isLoading: true,
            error: undefined,
        }));
        builder.addCase(getFlcikrData.rejected, (state) => ({
            ...state,
            isLoading: false,
            error: 'error fetch data',
        }));
    },
});

export const { actions, reducer } = flickrSlice;

export default reducer;
