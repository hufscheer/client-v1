import GameLabel from './GameLabel';
import GameMain from './GameMain';
import GameScore from './GameScore';
import GameTeam from './GameTeam';
import GameTeamLogo from './GameTeamLogo';
import GameTeamName from './GameTeamName';
import GameTimer from './GameTimer';
import GameStatus from './GameStatus';

export const Game = Object.assign(GameMain, {
  Label: GameLabel,
  Score: GameScore,
  Status: GameStatus,
  TeamWrapper: GameTeam,
  TeamLogo: GameTeamLogo,
  TeamName: GameTeamName,
  Timer: GameTimer,
});
