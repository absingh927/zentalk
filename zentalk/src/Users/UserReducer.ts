import { Action, Loading, Success, Error } from '../types';
import { Users, User, CurrentUser, currentUserDefaultState } from './UserTypes';
import * as constants from './UserConstants';
import { ReducerMap } from '../helpers';

export const handlers: ReducerMap<Users> = {
  [constants.DUMMY_USERS__SUCCESS]: (state: Users, action: Action<User[]>) => {
    return {
      ...state,
      users: action.payload,
      usersState: Success,
    };
  },
  [constants.DUMMY_USERS_LOADING]: (state: Users) => {
    return {
      ...state,
      usersState: Loading,
    };
  },
  [constants.DUMMY_USERS__FAIL]: (state: Users) => {
    return {
      ...state,
      usersState: Error,
    };
  },
  [constants.USER_AUTH_LOADING]: (state: Users) => {
    return {
      ...state,
      curretUserState: Loading,
    };
  },
  [constants.USER_AUTH_FAIL]: (state: Users) => {
    return {
      ...state,
      curretUserState: Error,
    };
  },
  [constants.USER_AUTH_SUCCESS]: (state: Users, action: Action<CurrentUser>) => {
    return {
      ...state,
      currentUser: {
        avatar_url: constants.USER_AVATAR_URL,
        id: action.payload.id,
        logged_in: true,
        username: action.payload.username,
      },
      curretUserState: Success,
    };
  },
  [constants.USER_LOGOUT_SUCCESS]: (state: Users) => {
    return {
      ...state,
      currentUser: currentUserDefaultState,
      curretUserState: Loading,
    };
  },
  [constants.NEW_USER_CREATE_FAIL]: (state: Users) => {
    return {
      ...state,
      newUserState: Error,
    };
  },
  [constants.NEW_USER_CREATE_LOADING]: (state: Users) => {
    return {
      ...state,
      newUserState: Loading,
    };
  },
  [constants.NEW_USER_CREATE_SUCCESS]: (state: Users, action: Action<User>) => {
    const newUser = [];
    newUser.push(action.payload);

    return {
      ...state,
      users: [...state.users, ...newUser],
      currentUser: {
        avatar_url: action.payload.avatar_url,
        id: action.payload.id,
        logged_in: true,
        username: action.payload.username,
      },
      curretUserState: Success,
      newUserState: Success,
    };
  },
};

export function users(state: Users = constants.defaultState, action: Action<any>) {
  const handler = handlers[action.type];
  return handler ? handler(state, action) : state;
}
