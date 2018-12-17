import { Action, Success, Loading } from '../types';
import { Comments, Comment } from './CommentTypes';
import * as constants from './CommentsConstants';
import { ReducerMap } from '../helpers';

export const handlers: ReducerMap<Comments> = {
  [constants.NEW_COMMENT_SUCCESS]: (state: Comments, action: Action<Comment> ) => {
    let newComment = [];
    newComment.push(action.payload);
    return {
      ...state,
      comments: [...state.comments, ...newComment],
      commentsState: Success,
    }
  },
  [constants.COMMENTS_LOADING]: (state: Comments) => {
    return {
      ...state,
      postsState: Loading,
    };
  },
  [constants.COMMENTS_FAIL]: (state: Comments) => {
    return {
      ...state,
      usersState: Error,
    };
  },
  [constants.COMMENTS_SUCCESS]: (state: Comments, action: Action<Comment[]>) => {
    return {
      ...state,
      comments: action.payload,
      commentsState: Success
    }
  }
};

export function comments(state: Comments = constants.defaultState, action: Action<any>) {
  const handler = handlers[action.type];
  return handler ? handler(state, action) : state;
}
