import { CallStates } from '../types';
import { UserComment } from '../Comments/CommentTypes';

export type Posts = {
  posts: Post[];
  postsState: CallStates;
  createNewPostState: CallStates;
};

export type Post = {
  id: string;
  comments: UserComment[] | null;
  content: string;
  link: string;
  name: string;
  voteCount: number;
};

export type VoteCounterType = {
  postid: string;
  currentCount: number;
}
