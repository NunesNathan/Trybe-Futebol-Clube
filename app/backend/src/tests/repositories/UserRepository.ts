import { User, UserData } from '../../interfaces/user.interface'

export const userResponse: User = {
  id: 1,
  username: 'Admin',
  role: 'admin',
  email: 'admin@admin.com',
  password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW'
};

export const validUser: UserData = {
  email: 'admin@admin.com',
  password: 'secret_admin',
};

export const invalidUser: UserData = {
  email: 'admin@admn.com',
  password: 'secret_adin',
};
