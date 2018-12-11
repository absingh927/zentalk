import { Action, Users } from '../types';
import * as constants from './UserConstants';
import { ReducerMap } from '../helpers';

export const handlers: ReducerMap<Users> = {

};

export function users(state: Users = constants.defaultState, action: Action<any>) {
  const handler = handlers[action.type];
  return handler ? handler(state, action) : state;
}
