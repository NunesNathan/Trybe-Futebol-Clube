import MatchesRepository from '../../repositories/MatchesRepository';
import SaveMatchController from './saveMatchController';
import SaveMatchUseCase from './saveMatchUseCase';

const matchesRepository = new MatchesRepository();
const saveMatchUseCase = new SaveMatchUseCase(matchesRepository);
const saveMatchController = new SaveMatchController(saveMatchUseCase);

export default saveMatchController;
