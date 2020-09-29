import { useMemo } from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { createAction } from 'redux-actions';
import { AlertModel } from '../models';

// export const useTodoActions = (dispatch: Dispatch) => {
//   return useMemo(() => bindActionCreators(actions as any, dispatch), [dispatch]) as TodoActions;
// };
export function useTodoActions(message: string) {
  return { type: 'test', message };
}
