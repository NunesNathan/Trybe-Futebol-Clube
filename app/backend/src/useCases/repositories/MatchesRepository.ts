import IMatchesRepository from '../../interfaces/matchesRepository.interface';
import TeamModel from '../../database/models/Team';
import MatchModel from '../../database/models/Match';
import { Matches, ModelMatch, ReqSaveMatch, UpdateBody } from '../../interfaces/matches.interface';

export default class MatchesRepository implements IMatchesRepository {
  private model: typeof MatchModel;

  constructor() {
    this.model = MatchModel;
  }

  async getAll(): Promise<null | Matches> {
    const matches = await this.model.findAll({
      include: [
        { model: TeamModel, as: 'teamHome', attributes: ['teamName'] },
        { model: TeamModel, as: 'teamAway', attributes: ['teamName'] },
      ],
    });

    return matches as unknown as Matches;
  }

  async save(body: ReqSaveMatch): Promise<null | ModelMatch> {
    const match = await this.model.create(body);

    return match;
  }

  async finish(id: number): Promise<boolean> {
    const [match] = await this.model
      .update({ inProgress: false }, { where: { id } }) as unknown as number[];

    return !!match;
  }

  async update({ id, body }: UpdateBody): Promise<boolean> {
    const [match] = await this.model
      .update({
        homeTeamGoals: body.homeTeamGoals,
        awayTeamGoals: body.awayTeamGoals,
      }, { where: { id } });

    return !!match;
  }
}
