import { Action, Success, Loading } from '../types';
import { Posts, Post } from './PostTypes';
import * as constants from './PostsConstants';
import { ReducerMap } from '../helpers';

export const handlers: ReducerMap<Posts> = {
  [constants.NEW_POST_SUCCESS]: (state: Posts, action: Action<Post> ) => {
    let newPost = [];
    newPost.push(action.payload);
    return {
      ...state,
      posts: [...state.posts, ...newPost],
      createNewPostState: Success
    }
  },
  [constants.NEW_POST_LOADING]: (state: Posts) => {
    return {
      ...state,
      createNewPostState: Loading
    }
  },
  [constants.POSTS_LOADING]: (state: Posts) => {
    return {
      ...state,
      postsState: Loading,
    };
  },
  [constants.POSTS_FAIL]: (state: Posts) => {
    return {
      ...state,
      usersState: Error,
    };
  },
  [constants.POSTS_SUCCESS]: (state: Posts, action: Action<Post[]>) => {
    console.log(action.payload);
    return {
      ...state,
      posts: action.payload,
      postsState: Success,
    }
  },
};

export function posts(state: Posts = constants.defaultState, action: Action<any>) {
  const handler = handlers[action.type];
  return handler ? handler(state, action) : state;
}
