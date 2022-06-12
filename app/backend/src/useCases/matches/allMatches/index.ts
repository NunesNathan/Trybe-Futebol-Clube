import MatchesRepository from '../../repositories/MatchesRepository';
import AllMatchesController from './allMatchesController';
import AllMatchesUseCase from './allMatchesUseCase';

const matchesRepository = new MatchesRepository();
const allMatchesUseCase = new AllMatchesUseCase(matchesRepository);
const allMatchesController = new AllMatchesController(allMatchesUseCase);

export default allMatchesController;
