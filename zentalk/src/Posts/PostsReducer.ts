import { Action, Success, Loading } from '../types';
import { Posts, Post } from './PostTypes';
import * as constants from './PostsConstants';
import { ReducerMap } from '../helpers';

export const handlers: ReducerMap<Posts> = {
  [constants.NEW_POST_SUCCESS]: (state: Posts, action: Action<Post> ) => {
    let newPost = [];
    newPost.push(action.payload);
    console.log('posts',newPost);
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
  }
};

export function posts(state: Posts = constants.defaultState, action: Action<any>) {
  const handler = handlers[action.type];
  return handler ? handler(state, action) : state;
}
