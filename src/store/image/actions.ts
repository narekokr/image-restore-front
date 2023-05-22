import { ImageActionTypes, OptionNames } from './types';

interface getImagePending {
    type: ImageActionTypes.GET_PROCESSED_IMAGE_PENDING;
}

interface toggleOption {
    type: ImageActionTypes.TOGGLE_OPTION;
    payload: OptionNames;
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

export type ImageAction = getImagePending | getImageSuccess |
    getImageFail | setImage | toggleOption;
