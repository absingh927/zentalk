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

export const voteCounter = (voteType: string, postId: string, currentCount: number) => (dispatch: Dispatch) => {
  if (voteType === 'up') {
    dispatch({
      type: constants.VOTE_COUNT_UP,
      payload: {
        postid: postId,
        currentCount: currentCount,
      }
    });
  } else if ( voteType === 'down') {
    dispatch({
      type: constants.VOTE_COUNT_DOWN,
      payload: {
        postid: postId,
        currentCount: currentCount,
      }
    });
  }
  return;
};
