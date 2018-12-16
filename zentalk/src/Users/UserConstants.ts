import { Users, Loading } from '../types';

// Base statuses
export const USER_AUTH_LOADING = 'USER_AUTH_LOADING';
export const USER_AUTH_SUCCESS = 'USER_AUTH_SUCCESS';
export const USER_AUTH_FAIL = 'USER_AUTH_FAIL';

// Dummy Data statuses
export const DUMMY_USERS_LOADING = 'DUMMY_USERS_LOADING';
export const DUMMY_USERS__SUCCESS = 'DUMMY_USERS__SUCCESS';
export const DUMMY_USERS__FAIL = 'DUMMY_USERS_FAIL';


export const defaultState: Users = {
  users: [],
  currentUser: {
    id: '',
    username: '',
    logged_in: false,
  },
  usersState: Loading,
};

export const USER_DUMMY_PWD = '%tester123#';
export const USER_DATA_URL = 'http://localhost:3000/testData/users.json'
