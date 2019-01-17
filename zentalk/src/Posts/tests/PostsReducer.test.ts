import * as constants from '../PostsConstants';
import { posts } from '../PostsReducer';
import { Action } from '../../types';
import { Post, VoteCounterType } from '../PostTypes';
import { Success } from '../../types';
import { PostCommentUpdateType } from '../../Comments/CommentTypes';

describe('ModalManager Reducers', () => {
  it('should update state with new post', () => {
    const testPost = {
      id: 'posts_1',
      comments: [],
      content: 'test content',
      link: 'www.google.com',
      name: 'test post 1',
      voteCount: 0,
      createdAt: new Date().toUTCString(),
    };

    const createNewPostAction : Action<Post> = {
      type: constants.NEW_POST_SUCCESS,
      payload: testPost,
    }

    const expected = {
      ...constants.defaultState,
      createNewPostState: Success,
      posts: [testPost],
    };

    expect(posts(constants.defaultState, createNewPostAction)).toEqual(expected);
  });

  it('should increase voteCount of post by 1', () => {
    const testPost = {
      id: 'posts_1',
      comments: [],
      content: 'test content',
      link: 'www.google.com',
      name: 'test post 1',
      voteCount: 5,
      createdAt: new Date().toUTCString(),
    };

    const testState = {
      ...constants.defaultState,
      posts:[testPost],
    };

    const testPayload = {
      postid: testPost.id,
      currentCount: testPost.voteCount,
    }

    const incrementVoteCount : Action<VoteCounterType> = {
      type: constants.VOTE_COUNT_UP,
      payload: testPayload,
    };

    const expectedPost = {
      ...testPost,
      voteCount: (testPost.voteCount + 1),
    };

    const expected = {
      ...testState,
      posts:[expectedPost]
    };
     
    expect(posts(testState,incrementVoteCount)).toEqual(expected);
  });

  it('should decrease voteCount of post by 1', () => {
    const testPost = {
      id: 'posts_1',
      comments: [],
      content: 'test content',
      link: 'www.google.com',
      name: 'test post 1',
      voteCount: 5,
      createdAt: new Date().toUTCString(),
    };

    const testState = {
      ...constants.defaultState,
      posts:[testPost],
    };

    const testPayload = {
      postid: testPost.id,
      currentCount: testPost.voteCount,
    }

    const decrementVoteCount : Action<VoteCounterType> = {
      type: constants.VOTE_COUNT_DOWN,
      payload: testPayload,
    };

    const expectedPost = {
      ...testPost,
      voteCount: (testPost.voteCount - 1),
    };

    const expected = {
      ...testState,
      posts:[expectedPost]
    };
     
    expect(posts(testState,decrementVoteCount)).toEqual(expected);
  });

  it('should add comment to post', () => {
    const testPost = {
      id: 'posts_1',
      comments: [],
      content: 'test content',
      link: 'www.google.com',
      name: 'test post 1',
      voteCount: 5,
      createdAt: new Date().toUTCString(),
    };

    const testState = {
      ...constants.defaultState,
      posts:[testPost],
    };

    const testPayload = {
      comment_id: 'testCommentid_1',
      post_id: 'posts_1',
    };

    const addCommentToPost : Action<PostCommentUpdateType> = {
      type: constants.NEW_COMMENT_POST_UPDATE,
      payload: testPayload,
    };

    const expectedPost = {
      ...testPost,
      comments: [testPayload.comment_id],
    };

    const expected = {
      ...testState,
      posts:[expectedPost]
    };
     
    expect(posts(testState,addCommentToPost)).toEqual(expected);
  });
})