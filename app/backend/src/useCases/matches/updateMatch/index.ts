import MatchesRepository from '../../repositories/MatchesRepository';
import UpdateMatchController from './updateMatchController';
import UpdateMatchUseCase from './updateMatchUseCase';

const matchesRepository = new MatchesRepository();
const updateMatchUseCase = new UpdateMatchUseCase(matchesRepository);
const updateMatchController = new UpdateMatchController(updateMatchUseCase);

export default updateMatchController;
