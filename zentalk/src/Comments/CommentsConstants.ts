import { Comments } from '../types';

export const COMMENTS_LOADING = 'COMMENTS_LOADING';
export const COMMENTS_SUCCESS = 'COMMENTS_SUCCESS';
export const COMMENTS_FAIL = 'COMMENTS_FAIL';

export const NEW_COMMENT = 'NEW_COMMENT';

export const defaultState: Comments = {
  comments: [],
};
