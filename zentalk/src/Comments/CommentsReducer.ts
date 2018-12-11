import { Action, Comments } from '../types';
import * as constants from './CommentsConstants';
import { ReducerMap } from '../helpers';

export const handlers: ReducerMap<Comments> = {

};

export function comments(state: Comments = constants.defaultState, action: Action<any>) {
  const handler = handlers[action.type];
  return handler ? handler(state, action) : state;
}
