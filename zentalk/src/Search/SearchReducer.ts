import { Action } from '../types';
import { SearchQuery } from './SearchTypes';
import * as constants from './SearchConstants';
import { ReducerMap } from '../helpers';


export const handlers: ReducerMap<SearchQuery> = {
  [constants.SEARCH_SEARCHING]: (state: SearchQuery, action: Action<SearchQuery>) => {
    return {
      ...state,
      searchText: action.payload.searchText,
    }
  }
};

export function searchQuery(state: SearchQuery = constants.defaultState, action: Action<any>) {
  const handler = handlers[action.type];
  return handler ? handler(state, action) : state;
}
