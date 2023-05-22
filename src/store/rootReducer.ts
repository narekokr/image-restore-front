import { combineReducers } from 'redux';
import { imageReducer } from './image';

const rootReducer = combineReducers({
  image: imageReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
