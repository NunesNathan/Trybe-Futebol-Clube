import { ModelMatches } from './matches.interface';

export default interface IMatchesRepository {
  getAll(): Promise<ModelMatches | null>;
}
