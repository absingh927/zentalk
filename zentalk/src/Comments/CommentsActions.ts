import { Dispatch } from 'redux';
import * as constants from './CommentsConstants';
import { NewComment } from './CommentTypes';
import { uniqueId } from 'lodash-es';

export const createNewUserComment = (newComment: NewComment) => (dispatch: Dispatch) => {
  const comment = {
    comment_id: uniqueId(newComment.post_id + '-comment_1'),
    content: newComment.content,
    post_id: newComment.post_id,
    userInfo: newComment.userInfo
  }
  console.log('new user comment', comment);
  dispatch({
    type: constants.NEW_COMMENT_SUCCESS,
    payload: comment,
  });
};