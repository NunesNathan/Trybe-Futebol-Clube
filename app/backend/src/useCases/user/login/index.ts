import JwtLogin from '../../../services/Jwt';
import UserLoginController from './UserLoginController';
import UserLoginUseCase from './UserLoginUseCase';
import UserRepository from '../../repositories/UserRepository';

const jwtLogin = new JwtLogin();

const userRepository = new UserRepository();
const userLoginUseCase = new UserLoginUseCase(userRepository, jwtLogin);
const userLoginController = new UserLoginController(userLoginUseCase);

export default userLoginController;
