export interface ImageState {
    image: string | null;
    uploadedImage: string | null;
    loading: boolean;
    error: string | null;
}

export enum ImageActionTypes {
    GET_PROCESSED_IMAGE_PENDING = 'GET_PROCESSED_IMAGE_PENDING',
    GET_PROCESSED_IMAGE_SUCCESS = 'GET_PROCESSED_IMAGE_SUCCESS',
    GET_PROCESSED_IMAGE_FAIL = 'GET_POST_COMMENTS_FAIL',
    SET_IMAGE = 'SET_IMAGE',
}
