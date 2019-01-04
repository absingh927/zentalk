import { Comments } from './Comments/CommentTypes';
import { Users } from './Users/UserTypes';
import { Posts } from './Posts/PostTypes';
import { SearchQuery } from './Search/SearchTypes';

export type AppState = {
  users: Users;
  posts: Posts;
  comments: Comments;
  searchQuery: SearchQuery;
};
