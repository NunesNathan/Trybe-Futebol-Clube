import JwtLogin from '../../../services/Jwt';
import UserLoginController from './UserLoginController';
import UserLoginUseCase from './UserLoginUseCase';
import UserRepository from '../../repositories/UserRepository';
import UserValidation from '../../../middleware/validate/userBodyValidation';

const userValidation = new UserValidation();
const jwtLogin = new JwtLogin();

const userRepository = new UserRepository();
const userLoginUseCase = new UserLoginUseCase(userRepository, jwtLogin);
const userLoginController = new UserLoginController(userLoginUseCase);

const login = {
  access: [
    userValidation.handle.bind(userValidation),
    userLoginController.handle.bind(userLoginController),
  ],
};

export default login;
