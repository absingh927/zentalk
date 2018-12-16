import { Dispatch } from 'redux';
import * as constants from './PostsConstants';
// import axios from 'axios';
import { Post } from './PostTypes';

export const createNewPost = (newPost: Post) => (dispatch: Dispatch) => {

  dispatch({type: constants.NEW_POST_LOADING});

}
