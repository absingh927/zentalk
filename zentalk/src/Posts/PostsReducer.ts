import { Action, Success, Loading } from '../types';
import { Posts, Post, VoteCounterType } from './PostTypes';
import * as constants from './PostsConstants';
import { ReducerMap } from '../helpers';
import { cloneDeep, findIndex } from 'lodash';
import { PostCommentUpdateType } from '../Comments/CommentTypes';

export const handlers: ReducerMap<Posts> = {
  [constants.NEW_POST_SUCCESS]: (state: Posts, action: Action<Post> ) => {
    const newPost = [];
    newPost.push(action.payload);
    return {
      ...state,
      posts: [...state.posts, ...newPost],
      createNewPostState: Success,
    };
  },
  [constants.NEW_COMMENT_POST_UPDATE]: (state: Posts, action: Action<PostCommentUpdateType>) => {
    const clonedPosts = cloneDeep(state.posts);
    const currentPostIndex = findIndex(clonedPosts, ['id', action.payload.post_id]);

    clonedPosts[currentPostIndex].comments.push(action.payload.comment_id);

    return {
      ...state,
      posts: clonedPosts,
    };
  },
  [constants.NEW_POST_LOADING]: (state: Posts) => {
    return {
      ...state,
      createNewPostState: Loading,
    };
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
    };
  },
  [constants.VOTE_COUNT_UP]: (state: Posts, action: Action<VoteCounterType>) => {
    const clonedPosts = cloneDeep(state.posts);
    const currentPostIndex = findIndex(clonedPosts, ['id', action.payload.postid]);
    const currentCount = action.payload.currentCount;

    clonedPosts[currentPostIndex].voteCount = (currentCount + 1);

    return {
      ...state,
      posts: clonedPosts,
    };
  },
  [constants.VOTE_COUNT_DOWN]: (state: Posts, action: Action<VoteCounterType>) => {
    const clonedPosts = cloneDeep(state.posts);
    const currentPostIndex = findIndex(clonedPosts, ['id', action.payload.postid]);
    const currentCount = action.payload.currentCount;

    clonedPosts[currentPostIndex].voteCount = (currentCount - 1);

    return {
      ...state,
      posts: clonedPosts,
    };
  },
};

export function posts(state: Posts = constants.defaultState, action: Action<any>) {
  const handler = handlers[action.type];
  return handler ? handler(state, action) : state;
}
