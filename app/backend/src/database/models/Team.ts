import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';
import Match from './Match';

export default class Team extends Model {
  id: number;
  teamName: string;
}

Team.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  teamName: {
    type: STRING,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'teams',
  underscored: true,
  timestamps: false,
});

Team.hasMany(Match, { foreignKey: 'home_team', as: 'home_team_matches' });
Team.hasMany(Match, { foreignKey: 'away_team', as: 'away_team_matches' });

Match.belongsTo(Team, { foreignKey: 'id', as: 'id_home_team' });
Match.belongsTo(Team, { foreignKey: 'id', as: 'id_away_team' });
