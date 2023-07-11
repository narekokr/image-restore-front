import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { Buffer } from 'buffer';
import { ImageActionTypes, ImageState, OptionNames } from './types';
import client from '../../axios';
import { ImageAction } from './actions';
import { RootState } from '../rootReducer';
import { ApiEndpoints } from '../../constants';

export function storeImage(payload: string | null) {
  return {
    type: ImageActionTypes.SET_IMAGE,
    payload,
  };
}

export function toggleOption(payload: OptionNames) {
  return {
    type: ImageActionTypes.TOGGLE_OPTION,
    payload,
  };
}

const dataUrlToBlob = (dataUrl: string) => {
  const arr = dataUrl.split(',');
  // @ts-ignore
  const mime = arr[0].match(/:(.*?);/)[1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], { type: mime });
};

const dataUrlToBase64 = (dataUrl: string) => {
  return dataUrl.split(',')[1];
};

export function getResultImage(image: string, endpoint: ApiEndpoints):
    ThunkAction<void, RootState, any, Action<string>> {
  return async function getResultImageThunk(dispatch) {
    const blob = dataUrlToBase64(image);
    dispatch({ type: ImageActionTypes.GET_PROCESSED_IMAGE_PENDING });
    try {
      const response = await client.post(endpoint, { image: blob }, {
        responseType: 'arraybuffer',
      });
      const output = 'data:image/png;base64,'.concat(Buffer.from(response.data, 'binary').toString('base64'));
      dispatch({ type: ImageActionTypes.GET_PROCESSED_IMAGE_SUCCESS, payload: output });
    } catch (e) {
      // @ts-ignore
      dispatch({ type: ImageActionTypes.GET_PROCESSED_IMAGE_FAIL, payload: e.message });
    }
  };
}

export function getResultImageWithMask(image: string, mask: string, endpoint: ApiEndpoints):
    ThunkAction<void, RootState, any, Action<string>> {
  return async function getResultImageThunk(dispatch) {
    const blob = dataUrlToBase64(image);
    const maskBlob = dataUrlToBase64(mask);

    dispatch({ type: ImageActionTypes.GET_PROCESSED_IMAGE_PENDING });
    try {
      const response = await client.post(endpoint, { image: blob, mask: maskBlob }, {
        responseType: 'arraybuffer',
      });
      const output = 'data:image/png;base64,'.concat(Buffer.from(response.data, 'binary').toString('base64'));
      dispatch({ type: ImageActionTypes.GET_PROCESSED_IMAGE_SUCCESS, payload: output });
    } catch (e) {
      // @ts-ignore
      dispatch({ type: ImageActionTypes.GET_PROCESSED_IMAGE_FAIL, payload: e.message });
    }
  };
}
