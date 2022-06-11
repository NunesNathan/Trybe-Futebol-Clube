import { Teams } from './teams.interface';

export default interface ITeamsRepository {
  getAll(): Promise<Teams | null>
}
