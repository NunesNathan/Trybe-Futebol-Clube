import JwtValidation from '../../middleware/validate/jwtValidation';
import allMatchesController from './allMatches';
import saveMatchController from './saveMatch';

const jwtValidation = new JwtValidation();

const matches = {
  allMatches: allMatchesController.handle.bind(allMatchesController),
  saveMatch: [
    jwtValidation.handle.bind(jwtValidation),
    saveMatchController.handle.bind(saveMatchController),
  ],
};

export default matches;
