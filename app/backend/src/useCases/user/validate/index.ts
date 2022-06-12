import UserRepository from '../../repositories/UserRepository';
import ValidateUserController from './validateUserController';
import ValidateUserUseCase from './validateUserUseCase';

const userRepository = new UserRepository();
const validateUserUseCase = new ValidateUserUseCase(userRepository);
const validateUserController = new ValidateUserController(validateUserUseCase);

export default validateUserController;
