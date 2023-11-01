import { Game } from '@/components/common/Game';
import { GameDetailType } from '@/types/game';

export default function GameInfo({ game }: { game: GameDetailType }) {
  return (
    <div className="flex flex-col gap-1 justify-center px-2 py-8 bg-white rounded-md">
      <Game>
        <Game.TeamWrapper direction="col" gap={2}>
          <Game.TeamLogo
            src={game.firstTeam.logoImageUrl}
            alt={`${game.firstTeam.name} 로고`}
            size="w-24 h-24"
          />
          <Game.TeamName fontSize="text-sm">
            {game.firstTeam.name}
          </Game.TeamName>
        </Game.TeamWrapper>

        <Game.Live gameStatus={game.gameStatus} />
        <Game.Score
          firstTeamScore={game.firstTeamScore}
          secondTeamScore={game.secondTeamScore}
          fontSize="text-3xl"
          fontWeight="font-semibold"
        />

        <Game.TeamWrapper direction="col" gap={2}>
          <Game.TeamLogo
            src={game.secondTeam.logoImageUrl}
            alt={`${game.secondTeam.name} 로고`}
            size="w-24 h-24"
          />
          <Game.TeamName fontSize="text-sm">
            {game.secondTeam.name}
          </Game.TeamName>
        </Game.TeamWrapper>
      </Game>
    </div>
  );
}
