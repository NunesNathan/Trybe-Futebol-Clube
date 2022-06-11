import { Team, Teams } from './teams.interface';

export default interface ITeamsRepository {
  getAll(): Promise<Teams | null>;
  getByPk(id: number): Promise<Team | null>;
}
