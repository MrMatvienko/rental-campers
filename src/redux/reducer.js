import { combineReducers } from '@reduxjs/toolkit';
import { camperReducer } from './campers/slice';

export const rootReducer = combineReducers({
  campers: camperReducer,
});
