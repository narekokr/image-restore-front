import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import {
  useSelector as useReduxSelector,
  TypedUseSelectorHook,
} from 'react-redux';
import rootReducer, { RootState } from './rootReducer';
import { ImageState } from './image/types';

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
export interface ApplicationState {
  image: ImageState;
}

const middleware = [thunk as ThunkMiddleware<RootState>];

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
export type AppDispatch = typeof store.dispatch;
