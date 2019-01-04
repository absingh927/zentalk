import { CallStates } from '../types';

export type SearchQuery = {
  searchText: string;
  searchStatus: CallStates;
};