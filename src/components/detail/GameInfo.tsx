import { EachGameResponse } from '@/types/game';
import { Game } from '@/components/common/Game';

export default function GameInfo({ game }: { game: EachGameResponse }) {
  return (
    <div className="flex flex-col gap-1 justify-center p-2 bg-white">
      <Game>
        <Game.Label>
          <div
            className={`text-center text-red-400 ${
              game.gameStatus === 'END' ||
              (game.gameStatus === 'BEFORE' && 'text-gray-400')
            }`}
          >
            {game.gameStatus === 'BEFORE' && '경기 예정'}
            {game.gameStatus === 'FIRST_HALF' ||
              (game.gameStatus === 'SECOND_HALF' && 'Live')}
            {game.gameStatus === 'END' && '경기 종료'}
            {game.gameStatus === 'BREAK_TIME' && '휴식 시간'}
          </div>
        </Game.Label>
        <Game.TeamWrapper direction="col">
          <Game.TeamLogo
            src={game.firstTeam.logoImageUrl}
            alt={`${game.firstTeam.name} 로고`}
            width={50}
            height={50}
          />
          <Game.TeamName>{game.firstTeam.name}</Game.TeamName>
        </Game.TeamWrapper>

        <Game.Score
          firstTeamScore={game.firstTeamScore}
          secondTeamScore={game.secondTeamScore}
          fontSize="text-xl"
          fontWeight="font-bold"
        />

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
