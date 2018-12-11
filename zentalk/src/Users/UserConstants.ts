import { Users } from '../types';

export const USER_AUTH_LOADING = 'USER_AUTH_LOADING';
export const USER_AUTH_SUCCESS = 'USER_AUTH_SUCCESS';
export const USER_AUTH_FAIL = 'USER_AUTH_FAIL';

export const defaultState: Users = {
  users: [],
  currentUser: {
    id: '',
    username: '',
    logged_in: false,
  },
};

export const USER_DUMMY_PWD = '%tester123#';
