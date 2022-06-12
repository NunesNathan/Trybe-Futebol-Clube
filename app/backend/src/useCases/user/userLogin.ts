import userLoginController from './login';
import UserValidation from '../../middleware/validate/userBodyValidation';
import validateUserController from './validate';
import JwtValidation from '../../middleware/validate/jwtValidation';

const userValidation = new UserValidation();
const jwtValidation = new JwtValidation();

const login = {
  access: [
    userValidation.handle.bind(userValidation),
    userLoginController.handle.bind(userLoginController),
  ],
  validate: [
    jwtValidation.handle.bind(jwtValidation),
    validateUserController.handle.bind(validateUserController),
  ],
};

export default login;
