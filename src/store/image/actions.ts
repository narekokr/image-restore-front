import { ImageActionTypes } from './types';

interface getImagePending {
    type: ImageActionTypes.GET_PROCESSED_IMAGE_PENDING;
}

interface getImageSuccess {
    type: ImageActionTypes.GET_PROCESSED_IMAGE_SUCCESS;
    payload: string;
}

interface getImageFail {
    type: ImageActionTypes.GET_PROCESSED_IMAGE_FAIL;
    payload: string;
}

interface setImage {
    type: ImageActionTypes.SET_IMAGE;
    payload: string;
}

export type ImageAction = getImagePending | getImageSuccess | getImageFail | setImage;
