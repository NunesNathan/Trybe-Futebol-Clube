import TeamsRepository from '../../repositories/TeamsRepository';
import OneTeamController from './oneTeamController';
import OneTeamUseCase from './oneTeamUseCase';

const teamsRepository = new TeamsRepository();
const oneTeamUseCase = new OneTeamUseCase(teamsRepository);
const oneTeamController = new OneTeamController(oneTeamUseCase);

export default oneTeamController;
