import { Dispatch } from 'redux';
import * as constants from './CommentsConstants';
import { NewComment } from './CommentTypes';
import { uniqueId } from 'lodash-es';
import axios from 'axios';
import { NEW_COMMENT_POST_UPDATE } from '../Posts/PostsConstants';

export const createNewUserComment = (newComment: NewComment) => (dispatch: Dispatch) => {
  const comment = {
    comment_id: uniqueId(newComment.post_id + '-comment_1'),
    content: newComment.content,
    post_id: newComment.post_id,
    userInfo: newComment.userInfo,
  };
  // disptach to comments reducer for adding new user comment
  dispatch({
    type: constants.NEW_COMMENT_SUCCESS,
    payload: comment,
  });
  // dispatch to posts reducer to add new comment data to posts
  dispatch({
    type: NEW_COMMENT_POST_UPDATE,
    payload: comment,
  });
};

export const createDummyComments = () => (dispatch: Dispatch) => {
  dispatch({type: constants.COMMENTS_LOADING});

  axios.get(constants.COMMENTS_DATA_URL)
  .then((users)  => {
    dispatch({
      type: constants.COMMENTS_SUCCESS,
      payload: users.data.comments,
    });
  })
  .catch((error) => {
    dispatch({
      type: constants.COMMENTS_FAIL,
      payload: error,
    });
  });
}
