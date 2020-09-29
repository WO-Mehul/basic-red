import { Constants } from "../../constants/Constants";
import { handleActions } from 'redux-actions';

export const alert = (state = {}, action: any): any => {
  switch (action.type) {
    case Constants.ACTIONS.SUCCESS:
      return {
        type: 'success',
        message: action.message
      };
    case Constants.ACTIONS.ERROR:
      return {
        type: 'danger',
        message: action.message
      };
    case Constants.ACTIONS.CLEAR:
      return {};
    default:
      return state
  }
}