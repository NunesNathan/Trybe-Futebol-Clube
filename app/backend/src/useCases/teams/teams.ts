import allTeamsController from './allTeams';
import oneTeamController from './oneTeam';

const teams = {
  allTeams: allTeamsController.handle.bind(allTeamsController),
  oneTeam: oneTeamController.handle.bind(oneTeamController),
};

export default teams;
