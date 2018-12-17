//Global Types
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
