import MatchesRepository from '../../repositories/MatchesRepository';
import TeamsRepository from '../../repositories/TeamsRepository';
import SaveMatchController from './saveMatchController';
import SaveMatchUseCase from './saveMatchUseCase';

const teamsRepository = new TeamsRepository();
const matchesRepository = new MatchesRepository();
const saveMatchUseCase = new SaveMatchUseCase(matchesRepository, teamsRepository);
const saveMatchController = new SaveMatchController(saveMatchUseCase);

export default saveMatchController;
