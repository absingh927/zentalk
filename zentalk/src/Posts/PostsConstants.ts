import { Posts } from '../types';

export const POSTS_LOADING = 'POSTS_LOADING';
export const POSTS_SUCCESS = 'POSTS_SUCCESS';
export const POSTS_FAIL = 'POSTS_FAILL';

export const defaultState: Posts = {
  posts: [],
};

export const USER_DUMMY_PWD = '%tester123#';
