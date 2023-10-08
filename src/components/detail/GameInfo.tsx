import { EachGameResponse } from '@/types/game';
import { Game } from '@/components/common/Game';

export default function GameInfo({ game }: { game: EachGameResponse }) {
  return (
    <Game>
      <Game.TeamWrapper direction="col">
        <Game.TeamLogo
          src={game.firstTeam.logoImageUrl}
          alt={`${game.firstTeam.name} 로고`}
        />
        <Game.TeamName>{game.firstTeam.name}</Game.TeamName>
      </Game.TeamWrapper>
      <Game.Status>
        <Game.Live gameStatus={game.gameStatus} />
        <Game.Score
          firstTeamScore={game.firstTeamScore}
          secondTeamScore={game.secondTeamScore}
        />
        <Game.Label>{game.gameStatus}</Game.Label>
      </Game.Status>
      <Game.TeamWrapper direction="col">
        <Game.TeamLogo
          src={game.secondTeam.logoImageUrl}
          alt={`${game.secondTeam.name} 로고`}
        />
        <Game.TeamName>{game.secondTeam.name}</Game.TeamName>
      </Game.TeamWrapper>
    </Game>
  );
}
