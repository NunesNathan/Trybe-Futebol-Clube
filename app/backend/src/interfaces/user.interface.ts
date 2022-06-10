export interface User {
  id: number;
  username: string;
  role: string;
  email: string;
  password: string;
}

export type UserDTO = Pick<User, 'email' | 'password'>;

export interface UserToReturn {
  id: number;
  username: string;
  role: string;
  email: string;
  password?: string;
}

export type UserToLogin = {
  user: UserToReturn | null;
  token: string;
};

export type UserData = Pick<User, 'email' | 'password'>;
