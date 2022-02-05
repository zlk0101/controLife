import {AppActionI, AppStateI, ActionTypes} from './types';

const AppReducer = (state: AppStateI, action: AppActionI): AppStateI => {
  const {type, payload} = action;
  switch (type) {
    case ActionTypes.ADD_USER:
      console.log(payload);
      return {user: payload};
    case ActionTypes.UPDATE_USER:
      return {
        ...state,
        user: payload,
      };
    case ActionTypes.REMOVE_USER:
      return {
        ...state,
        user: payload,
      };
    default:
      return {...state};
  }
};
export default AppReducer;
