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

export type ActionWithoutPayload = {
  type: string;
};
