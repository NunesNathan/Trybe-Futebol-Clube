import { ModelMatch, ModelMatches, ReqSaveMatch, UpdateBody } from './matches.interface';

export default interface IMatchesRepository {
  getAll(): Promise<ModelMatches | null>;
  save(body: ReqSaveMatch): Promise<null | ModelMatch>;
  finish(id: number): Promise<boolean>;
  update({ id, body }: UpdateBody): Promise<boolean>;
}
