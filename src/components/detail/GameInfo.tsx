import { EachGameResponse } from '@/types/game';
import { Game } from '@/components/common/Game';

export default function GameInfo({ game }: { game: EachGameResponse }) {
  return (
    <div className="flex flex-col gap-1 justify-center p-2 bg-white">
      <Game>
        <Game.TeamWrapper direction="col">
          <Game.TeamLogo
            src={game.firstTeam.logoImageUrl}
            alt={`${game.firstTeam.name} 로고`}
            width={50}
            height={50}
          />
          <Game.TeamName>{game.firstTeam.name}</Game.TeamName>
        </Game.TeamWrapper>
        <Game.Status>
          <Game.Live gameStatus={game.gameStatus} />
          <Game.Score
            firstTeamScore={game.firstTeamScore}
            secondTeamScore={game.secondTeamScore}
            fontSize="text-xl"
            fontWeight="font-bold"
          />
          <Game.Label>{game.gameStatus}</Game.Label>
        </Game.Status>
        <Game.TeamWrapper direction="col">
          <Game.TeamLogo
            src={game.secondTeam.logoImageUrl}
            alt={`${game.secondTeam.name} 로고`}
            width={50}
            height={50}
          />
          <Game.TeamName>{game.secondTeam.name}</Game.TeamName>
        </Game.TeamWrapper>
      </Game>
    </div>
  );
}
