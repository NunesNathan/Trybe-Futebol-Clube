import MatchesRepository from '../../repositories/MatchesRepository';
import FinishMatchController from './finishMatchController';
import FinishMatchUseCase from './finishMatchUseCase';

const matchesRepository = new MatchesRepository();
const finishMatchUseCase = new FinishMatchUseCase(matchesRepository);
const finishMatchController = new FinishMatchController(finishMatchUseCase);

export default finishMatchController;
