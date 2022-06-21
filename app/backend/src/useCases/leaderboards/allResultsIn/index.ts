import LeaderboardsRepository from '../../repositories/LeaderboardsRepository';
import AllResultsInController from './allResultsInController';
import AllResultsInUseCase from './allResultsInUseCase';

const leaderboardsRepository = new LeaderboardsRepository();
const allResultsInUseCase = new AllResultsInUseCase(leaderboardsRepository);
const allResultsInController = new AllResultsInController(allResultsInUseCase);

export default allResultsInController;
