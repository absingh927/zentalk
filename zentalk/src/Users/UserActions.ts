import { Dispatch } from 'redux';
import * as constants from './UserConstants';
import axios from 'axios';
import { AppState } from '../AppState';

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

  const currentState = getState();
  const users = currentState.users.users;
  console.log('users', users);
  console.log('entered username', username);

}