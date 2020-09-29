import { combineReducers } from 'redux';
import { RootState } from './state';
import { alert as alertReducer } from './alert';

export type { RootState };

export const rootReducer = combineReducers<RootState>({
  alert: alertReducer
});
