import { ImageAction } from './actions';
import { ImageActionTypes, ImageState, OptionNames } from './types';

const initialState = {
  image: null,
  loading: false,
  error: null,
  uploadedImage: null,
  [OptionNames.colorizeSelected]: false,
  [OptionNames.drawScratchesYourself]: false,
  [OptionNames.removeScratchesSelected]: false,
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

    case ImageActionTypes.TOGGLE_OPTION:
      return {
        ...state,
        [OptionNames[action.payload]]: !state[OptionNames[action.payload]],
      };
    default:
      return state;
  }
};
