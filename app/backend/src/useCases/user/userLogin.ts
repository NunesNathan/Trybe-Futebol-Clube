import userLoginController from './login';
import UserValidation from '../../middleware/validate/userBodyValidation';
import validateUserController from './validate';

const userValidation = new UserValidation();

const login = {
  access: [
    userValidation.handle.bind(userValidation),
    userLoginController.handle.bind(userLoginController),
  ],
  validate: validateUserController.handle.bind(validateUserController),
};

export default login;
