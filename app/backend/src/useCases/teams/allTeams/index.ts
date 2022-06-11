import TeamsRepository from '../../repositories/TeamsRepository';
import AllTeamsController from './allTeamsController';
import AllTeamsUseCase from './allTeamsUseCase';

const teamsRepository = new TeamsRepository();
const allTeamsUseCase = new AllTeamsUseCase(teamsRepository);
const allTeamsController = new AllTeamsController(allTeamsUseCase);

export default allTeamsController;
