import { CallStates } from '../types';

export type Users = {
  users: User[];
  currentUser: CurrentUser;
  usersState: CallStates;
  curretUserState: CallStates;
  newUserState: CallStates;
};

export type User = {
  avatar_url:string;
  id: string;
  username: string;
  password: string;
};

export type CurrentUser = {
  avatar_url: string;
  id: string;
  logged_in: boolean;
  username: string;
};

export const currentUserDefaultState = {
  avatar_url: '',
  id: '',
  username: '',
  logged_in: false,
};
