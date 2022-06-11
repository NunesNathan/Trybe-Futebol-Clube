import JwtLogin from '../../../services/Jwt';
import ValidateUserController from './validateUserController';
import ValidateUserUseCase from './validateUserUseCase';
import UserRepository from '../../repositories/UserRepository';

const jwtLogin = new JwtLogin();

const userRepository = new UserRepository();
const validateUserUseCase = new ValidateUserUseCase(userRepository, jwtLogin);
const validateUserController = new ValidateUserController(validateUserUseCase);

export default validateUserController;
