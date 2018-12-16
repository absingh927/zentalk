export type Users = {
  users: User[];
  currentUser: CurrentUser;
  usersState: CallStates;
};

export type User = {
  avatar_url:string;
  id: string;
  username: string;
  password: string;
};

export type CurrentUser = {
  id: string;
  logged_in: boolean;
  username: string;
};

export type Posts = {
  posts: Post[];
};

export type Post = {
  id: string;
  comments: UserComment[];
  content: string;
  name: string;
  voteCount: number;
};

export type UserComment = {
  comment_id: string;
};

export type Comments = {
  comments: Comment[];
};

export type Comment = {
  comment_id: string;
  content: string;
  post_id: string;
  username_id: string;
  username: string;
};

export const Loading = 'loading';
export const Success = 'success';
export const Error = 'error';

export type CallStates = typeof Loading | typeof Success | typeof Error;

export type Action<T> = {
  type: string;
  payload: T;
};
