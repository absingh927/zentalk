import {Posts, Comments } from './types';
import { Users } from './Users/UserTypes';

export type AppState = {
  users: Users;
  posts: Posts;
  comments: Comments[];
};
