import { Action, Posts } from '../types';
import * as constants from './PostsConstants';
import { ReducerMap } from '../helpers';

export const handlers: ReducerMap<Posts> = {

};

export function posts(state: Posts = constants.defaultState, action: Action<any>) {
  const handler = handlers[action.type];
  return handler ? handler(state, action) : state;
}
