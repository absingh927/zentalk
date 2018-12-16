import { Dispatch } from 'redux';
import * as constants from './UserConstants';
import axios from 'axios';
import { AppState } from '../AppState';
import { find } from 'lodash-es';
import { currentUserDefaultState } from './UserTypes';

export const createDummyUsers = () => (dispatch: Dispatch) => {
  dispatch({type: constants.DUMMY_USERS_LOADING});

  axios.get(constants.USER_DATA_URL)
  .then(users  => {
    dispatch({
      type: constants.DUMMY_USERS__SUCCESS,
      payload: users.data.users,
    });
  })
  .catch(error => {
    dispatch({
      type: constants.DUMMY_USERS__FAIL,
      payload: error,
    });
  })
};

export const userLogin = (username: string, password: string) => (dispatch: Dispatch, getState: () => AppState) => {
  dispatch({type: constants.USER_AUTH_LOADING});

  const users = getState().users.users;
  const userData = find(users,(u) => {return u.username === username && u.password === password});

  if (userData === undefined) {
    dispatch({
      type: constants.USER_AUTH_FAIL});
  } 
  else {
    dispatch({
      type: constants.USER_AUTH_SUCCESS,
      payload: userData
    });
  }
}

export const userLogout = () => (dispatch: Dispatch) => {
  dispatch({
    type: constants.USER_LOGOUT_SUCCESS,
    payload: currentUserDefaultState
  });
}