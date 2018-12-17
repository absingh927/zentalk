import { Action, Success } from '../types';
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
  }
};

export function comments(state: Comments = constants.defaultState, action: Action<any>) {
  const handler = handlers[action.type];
  return handler ? handler(state, action) : state;
}
