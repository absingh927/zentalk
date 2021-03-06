import { combineReducers } from 'redux';
import { users } from './Users/UserReducer';
import { posts } from './Posts/PostsReducer';
import { comments } from './Comments/CommentsReducer';
import { searchQuery } from './Search/SearchReducer';

import { reducer as modalManager } from './shared/ModalManager/ModalManagerReducer';

export const rootReducer = combineReducers({
users,
posts,
comments,
modalManager,
searchQuery
} as any);
