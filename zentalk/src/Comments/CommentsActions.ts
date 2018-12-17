import { Dispatch } from 'redux';
import * as constants from './CommentsConstants';
import { NewComment } from './CommentTypes';
import { uniqueId } from 'lodash-es';
import axios from 'axios';

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

export const createDummyComments = () => (dispatch: Dispatch) => {
  dispatch({type: constants.COMMENTS_LOADING});

  axios.get(constants.COMMENTS_DATA_URL)
  .then(users  => {
    dispatch({
      type: constants.COMMENTS_SUCCESS,
      payload: users.data.comments,
    });
  })
  .catch(error => {
    dispatch({
      type: constants.COMMENTS_FAIL,
      payload: error,
    });
  })

}