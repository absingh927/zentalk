import { Dispatch } from 'redux';
import * as constants from './PostsConstants';
import { Post } from './PostTypes';
import axios from 'axios';

export const createNewPost = (newPost: Post) => (dispatch: Dispatch) => {
  dispatch({type: constants.NEW_POST_LOADING});

  dispatch({
    type: constants.NEW_POST_SUCCESS,
    payload: newPost,
  });
};

export const createDummyPosts = () => (dispatch: Dispatch) => {
  dispatch({type: constants.POSTS_LOADING});

  axios.get(constants.POST_DATA_URL)
  .then(users  => {
    dispatch({
      type: constants.POSTS_SUCCESS,
      payload: users.data.posts,
    });
  })
  .catch(error => {
    dispatch({
      type: constants.NEW_POST_FAIL,
      payload: error,
    });
  })
};
