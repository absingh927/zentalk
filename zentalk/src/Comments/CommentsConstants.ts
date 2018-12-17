import { Comments } from './CommentTypes';

export const COMMENTS_LOADING = 'COMMENTS_LOADING';
export const COMMENTS_SUCCESS = 'COMMENTS_SUCCESS';
export const COMMENTS_FAIL = 'COMMENTS_FAIL';

export const NEW_COMMENT_SUCCESS = 'NEW_COMMENT_SUCCESS';

export const defaultState: Comments = {
  comments: [],
  commentsState: null,
};
