import { Action, Loading, Success, Error } from '../types';
import { Users, User, CurrentUser, currentUserDefaultState } from './UserTypes';
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
  },
  [constants.USER_AUTH_LOADING]: (state: Users) => {
    return {
      ...state,
      usersState:Loading
    };
  },
  [constants.USER_AUTH_FAIL]: (state: Users) => {
    return {
      ...state,
      usersState: Error,
    };
  },
  [constants.USER_AUTH_SUCCESS]: (state: Users, action: Action<CurrentUser>) => {
    return {
      ...state,
      currentUser: {
        id: action.payload.id,
        logged_in: true,
        username: action.payload.username
      },
      usersState: Success
    };
  },
  [constants.USER_LOGOUT_SUCCESS]:(state:Users, action: Action<CurrentUser>) => {
    return {
      ...state,
      currentUser: currentUserDefaultState,
    };
  },
};

export function users(state: Users = constants.defaultState, action: Action<any>) {
  const handler = handlers[action.type];
  return handler ? handler(state, action) : state;
}
