import { CallStates } from 'src/types';
import { CurrentUser } from 'src/Users/UserTypes';

export type UserComment = {
  comment_id: string;
};

export type Comments = {
  comments: Comment[];
  commentsState: CallStates;
};

export type Comment = {
  comment_id: string;
  content: string;
  post_id: string;
  userInfo: CurrentUser; 
};

export type NewComment = {
  content: string;
  post_id: string;
  userInfo: CurrentUser;
}