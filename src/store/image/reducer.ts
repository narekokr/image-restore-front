import { ImageAction } from './actions';
import { ImageActionTypes, ImageState } from './types';

const initialState = {
  image: null,
  loading: false,
  error: null,
  uploadedImage: null,
};

export const imageReducer = (state: ImageState = initialState, action: ImageAction): ImageState => {
  switch (action.type) {
    case ImageActionTypes.GET_PROCESSED_IMAGE_PENDING:
      return {
        ...state,
        loading: true,
        image: null,
        error: null,
      };
    case ImageActionTypes.GET_PROCESSED_IMAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        image: action.payload,
        error: null,
      };
    case ImageActionTypes.GET_PROCESSED_IMAGE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        image: null,
      };
    case ImageActionTypes.SET_IMAGE:
      return {
        ...state,
        uploadedImage: action.payload,
      };
    default:
      return state;
  }
};
