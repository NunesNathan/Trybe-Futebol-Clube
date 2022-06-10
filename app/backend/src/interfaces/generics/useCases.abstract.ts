import { caseResponse, DTO } from './generics.interface';

export default abstract class UseCase {
  public abstract execute(body: DTO): Promise<caseResponse>;
}
