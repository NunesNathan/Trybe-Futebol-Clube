import ILoginUseCaseResponse from '../loginValidate.interface';
import { UserDTO } from '../user.interface';

export type DTO = UserDTO | string;

export type caseResponse = ILoginUseCaseResponse;
