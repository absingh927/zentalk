import { Loading } from '../types';
import { SearchQuery } from './SearchTypes';

export const defaultState: SearchQuery = {
  searchText:'',
  searchStatus: Loading,
};

export const SEARCH_SEARCHING = 'SEARCH_SEARCHING';