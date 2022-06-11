import ITeamsRepository from '../../interfaces/teamsRepository.interface';
import TeamModel from '../../database/models/Team';
import { Teams } from '../../interfaces/teams.interface';

export default class TeamsRepository implements ITeamsRepository {
  private model: typeof TeamModel;

  constructor() {
    this.model = TeamModel;
  }

  async getAll(): Promise<null | Teams> {
    const teams = await this.model.findAll();

    return teams;
  }
}
