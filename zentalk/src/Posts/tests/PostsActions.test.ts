import * as constants from '../PostsConstants';
import * as actions from '../PostsActions';
import { mockStore } from '../../shared/mockStore';

describe('Post Actions', () => {
  it('should create a new post', async () => {
    const store = mockStore();

    const testPost = {
      id: 'posts_1',
      comments: [],
      content: 'test content',
      link: 'www.google.com',
      name: 'test post 1',
      voteCount: 0,
      createdAt: new Date().toUTCString(),
    };

    const expected = {
      type: constants.NEW_POST_SUCCESS,
      payload: testPost,
    };

    await store.dispatch<any>(actions.createNewPost(testPost));
    const action =  store.getActions();

    expect(action[0]).toEqual({type: constants.NEW_POST_LOADING});
    expect(action[1]).toEqual(expected);
  });

  it ('should decrease counter', async () => {
    const store = mockStore();

    const expected = {
      type: constants.VOTE_COUNT_DOWN,
      payload: {
        postid: 'post_3',
        currentCount: 19,
      }
    };

    await store.dispatch<any>(actions.voteCounter('down', expected.payload.postid, 19));
    const action =  store.getActions();

    expect(action[0]).toEqual(expected);
  }); 

  it ('should increment counter', async () => {
    const store = mockStore();

    const expected = {
      type: constants.VOTE_COUNT_UP,
      payload: {
        postid: 'post_3',
        currentCount: 19,
      }
    };

    await store.dispatch<any>(actions.voteCounter('up', expected.payload.postid, expected.payload.currentCount));
    const action =  store.getActions();

    expect(action[0]).toEqual(expected);
  }); 
})