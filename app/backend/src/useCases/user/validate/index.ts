import JwtLogin from '../../../services/Jwt';
import UserRepository from '../../repositories/UserRepository';
import ValidateUserController from './validateUserController';
import ValidateUserUseCase from './validateUserUseCase';

const jwtLogin = new JwtLogin();

const userRepository = new UserRepository();
const validateUserUseCase = new ValidateUserUseCase(userRepository, jwtLogin);
const validateUserController = new ValidateUserController(validateUserUseCase);

export default validateUserController;
