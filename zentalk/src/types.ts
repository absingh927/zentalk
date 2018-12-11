export type Users = {
  users: User[];
  currentUser: currentUser;
};

export type User = {
  avatar_url:string;
  id: string;
  username: string;
  password: string;
};

export type currentUser = {
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
  id: string;
  content: string;
  username_id: string;
  username: string;
};

export type Action<T> = {
  type: string;
  payload: T;
};
