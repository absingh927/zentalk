import { Comments } from './Comments/CommentTypes';
import { Users } from './Users/UserTypes';
import { Posts } from './Posts/PostTypes';

export type AppState = {
  users: Users;
  posts: Posts;
  comments: Comments;
};
