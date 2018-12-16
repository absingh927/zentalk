import { Dispatch } from 'redux';
import * as constants from './UserConstants';
import axios from 'axios';

export const createDummyUsers = () => (dispatch: Dispatch) => {
  dispatch({type: constants.DUMMY_USERS_LOADING});

  axios.get(constants.USER_DATA_URL)
  .then(users  => {
    // console.log('users',users);
    dispatch({
      type: constants.DUMMY_USERS__SUCCESS,
      payload: users.data.users,
    });
  })
  .catch(error => {
    console.log(error);
    dispatch({
      type: constants.DUMMY_USERS__FAIL,
      payload: error,
    });
  })
};

export const userLogin = () => (dispatch: Dispatch) => {
  dispatch({type: constants.USER_AUTH_LOADING});

}