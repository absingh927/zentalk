import { Dispatch } from 'redux';
import * as constants from './PostsConstants';
import { Post } from './PostTypes';

export const createNewPost = (newPost: Post) => (dispatch: Dispatch) => {

  dispatch({type: constants.NEW_POST_LOADING});

  dispatch({
    type: constants.NEW_POST_SUCCESS,
    payload: newPost,
  });
}
