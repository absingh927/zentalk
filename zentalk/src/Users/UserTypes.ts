import { CallStates } from '../types';

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
