import GameWrapper from './pieces/GameWrapper';
import Label from './pieces/Label';
import Score from './pieces/Score';
import Status from './pieces/Status';
import Team from './pieces/Team';

export const GameBanner = Object.assign(GameWrapper, {
  Label,
  Score,
  Status,
  Team,
});
