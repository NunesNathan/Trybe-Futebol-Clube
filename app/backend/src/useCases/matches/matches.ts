import allMatchesController from './allMatches';

const matches = {
  allMatches: allMatchesController.handle.bind(allMatchesController),
};

export default matches;
