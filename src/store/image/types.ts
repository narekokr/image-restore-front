export enum OptionNames {
    colorizeSelected = 'colorizeSelected',
    removeScratchesSelected = 'removeScratchesSelected',
    drawScratchesYourself = 'drawScratchesYourself',
}

export interface ImageState {
    image: string | null;
    uploadedImage: string | null;
    loading: boolean;
    error: string | null;
    [OptionNames.colorizeSelected]: boolean;
    [OptionNames.drawScratchesYourself]: boolean;
    [OptionNames.removeScratchesSelected]: boolean;
}

export enum ImageActionTypes {
    GET_PROCESSED_IMAGE_PENDING = 'GET_PROCESSED_IMAGE_PENDING',
    GET_PROCESSED_IMAGE_SUCCESS = 'GET_PROCESSED_IMAGE_SUCCESS',
    GET_PROCESSED_IMAGE_FAIL = 'GET_POST_COMMENTS_FAIL',
    SET_IMAGE = 'SET_IMAGE',
    TOGGLE_OPTION = 'TOGGLE_OPTION',
}
