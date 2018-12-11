import { Users, Posts, Comments } from './types';

export type AppState = {
  users: Users[];
  posts: Posts[];
  comments: Comments[];
};