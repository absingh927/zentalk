import { CallStates } from '../types';

export type Posts = {
  posts: Post[];
  postsState: CallStates;
  createNewPostState: CallStates;
};

export type Post = {
  id: string;
  comments: string[];
  content: string;
  link: string;
  name: string;
  voteCount: number;
};

export type VoteCounterType = {
  postid: string;
  currentCount: number;
}
