import { Action, Success, Loading } from '../types';
import { Posts, Post, VoteCounterType } from './PostTypes';
import * as constants from './PostsConstants';
import { ReducerMap } from '../helpers';
import { cloneDeep, findIndex } from 'lodash-es';

export const handlers: ReducerMap<Posts> = {
  [constants.NEW_POST_SUCCESS]: (state: Posts, action: Action<Post> ) => {
    let newPost = [];
    newPost.push(action.payload);
    return {
      ...state,
      posts: [...state.posts, ...newPost],
      createNewPostState: Success,
    }
  },
  [constants.NEW_POST_LOADING]: (state: Posts) => {
    return {
      ...state,
      createNewPostState: Loading,
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
    return {
      ...state,
      posts: action.payload,
      postsState: Success,
    }
  },
  [constants.VOTE_COUNT_UP]: (state: Posts, action: Action<VoteCounterType>) => {
    const clonedPosts= cloneDeep(state.posts);
    const currentPostIndex = findIndex(clonedPosts,['id', action.payload.postid]);
    let currentCount = action.payload.currentCount;

    clonedPosts[currentPostIndex].voteCount = (currentCount + 1);

    return {
      ...state,
      posts: clonedPosts
    }
  },
  [constants.VOTE_COUNT_DOWN]: (state: Posts, action: Action<VoteCounterType>) => {
    const clonedPosts= cloneDeep(state.posts);
    const currentPostIndex = findIndex(clonedPosts,['id', action.payload.postid]);
    let currentCount = action.payload.currentCount;

    clonedPosts[currentPostIndex].voteCount = (currentCount - 1);

    return {
      ...state,
      posts: clonedPosts
    }
  },
};

export function posts(state: Posts = constants.defaultState, action: Action<any>) {
  const handler = handlers[action.type];
  return handler ? handler(state, action) : state;
}
