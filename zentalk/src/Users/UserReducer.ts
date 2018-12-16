import { Action, Users, User, Loading, Success, Error } from '../types';
import * as constants from './UserConstants';
import { ReducerMap } from '../helpers';

export const handlers: ReducerMap<Users> = {
  [constants.DUMMY_USERS__SUCCESS]: (state: Users, action: Action<User[]>) => {
    console.log(action.payload);
    return {
      ...state,
      users: action.payload,
      usersState: Success,
    };
  },
  [constants.DUMMY_USERS_LOADING]: (state:Users) => {
    return {
      ...state,
      usersState: Loading,
    };
  },
  [constants.DUMMY_USERS__FAIL]: (state:Users) => {
    return {
      ...state,
      usersState: Error,
    };
  }
};

export function users(state: Users = constants.defaultState, action: Action<any>) {
  const handler = handlers[action.type];
  return handler ? handler(state, action) : state;
}
