import GameWrapper from './GameWrapper';
import Label from './Label';
import Score from './Score';
import Status from './Status';
import Team from './Team';

export const Game = Object.assign(GameWrapper, {
  Label,
  Score,
  Status,
  Team,
});
