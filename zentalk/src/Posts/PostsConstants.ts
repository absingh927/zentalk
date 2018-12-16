import { Posts } from './PostTypes';
import { Loading } from '../types';

export const POSTS_LOADING = 'POSTS_LOADING';
export const POSTS_SUCCESS = 'POSTS_SUCCESS';
export const POSTS_FAIL = 'POSTS_FAILL';

export const NEW_POST_LOADING = 'NEW_POST_LOADING';
export const NEW_POST_SUCCESS = 'NEW_POST_SUCCESS';
export const NEW_POST_FAIL = 'NEW_POST_FAIL';

export const defaultState: Posts = {
  posts: [],
  postsState: Loading,
  createNewPostState: Loading,
};

