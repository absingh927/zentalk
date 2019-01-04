import { Dispatch } from 'redux';
import * as constants from './SearchConstants';
import Loading from 'src/shared/LoadingState';

export const searchString = (searchQuery: string) => (dispatch:Dispatch) => {
  const searchTerm = {
    searchText: searchQuery,
    searchStatus: Loading,
  }
  dispatch({
    type: constants.SEARCH_SEARCHING,
    payload: searchTerm,
  });
};