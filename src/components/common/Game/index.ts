import GameLabel from './GameLabel';
import GameLive from './GameLive';
import GameMain from './GameMain';
import GameScore from './GameScore';
import GameStatus from './GameStatus';
import GameTeam from './GameTeam';
import GameTeamLogo from './GameTeamLogo';
import GameTeamName from './GameTeamName';
import GameTimer from './GameTimer';

export const Game = Object.assign(GameMain, {
  Label: GameLabel,
  Live: GameLive,
  Score: GameScore,
  Status: GameStatus,
  TeamWrapper: GameTeam,
  TeamLogo: GameTeamLogo,
  TeamName: GameTeamName,
  Timer: GameTimer,
});
