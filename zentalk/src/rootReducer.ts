import { combineReducers } from 'redux';
import { users } from './Users/UserReducer';
import { posts } from './Posts/PostsReducer';
import { comments } from './Comments/CommentsReducer';

export const rootReducer = combineReducers({
users,
posts,
comments,
} as any);
