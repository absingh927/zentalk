import { UserComment, CallStates } from '../types';

export type Posts = {
  posts: Post[];
  postsState: CallStates;
  createNewPostState: CallStates;
};

export type Post = {
  id: string;
  comments: UserComment[];
  content: string;
  links: string;
  name: string;
  voteCount: number;
};
