import JwtValidation from '../../middleware/validate/jwtValidation';
import allMatchesController from './allMatches';
import saveMatchController from './saveMatch';
import finishMatchController from './finishMatch';
import updateMatchController from './updateMatch';

const jwtValidation = new JwtValidation();

const matches = {
  allMatches: allMatchesController.handle.bind(allMatchesController),
  saveMatch: [
    jwtValidation.handle.bind(jwtValidation),
    saveMatchController.handle.bind(saveMatchController),
  ],
  finishMatch: finishMatchController.handle.bind(finishMatchController),
  updateMatch: updateMatchController.handle.bind(updateMatchController),
};

export default matches;
