import { UserComment, CallStates } from '../types';

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
