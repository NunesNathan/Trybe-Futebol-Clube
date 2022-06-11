import teamsController from './allTeams';

const teams = {
  allTeams: [
    teamsController.handle.bind(teamsController),
  ],
};

export default teams;
