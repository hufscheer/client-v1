import { AllGamesResponse } from '@/types/game';
import { Game } from '../Game';

interface GameListProps {
  data: AllGamesResponse[];
}

export default function GameList({ data }: GameListProps) {
  return (
    <ul>
      {data.map((game) => (
        <Game key={game.id} gamdId={game.id}>
          <Game.Label>{game.name}</Game.Label>
          <Game.TeamWrapper gap={2}>
            <Game.TeamLogo
              src={game.firstTeam.logoImageUrl}
              alt={`${game.firstTeam.name} 로고`}
            />
            <Game.TeamName>{game.firstTeam.name}</Game.TeamName>
          </Game.TeamWrapper>
          <Game.Status>
            <Game.Score
              firstTeamScore={game.firstTeamScore}
              secondTeamScore={game.secondTeamScore}
            />
          </Game.Status>
          <Game.TeamWrapper reverse gap={2}>
            <Game.TeamLogo
              src={game.firstTeam.logoImageUrl}
              alt={`${game.secondTeam.name} 로고`}
            />
            <Game.TeamName>{game.secondTeam.name}</Game.TeamName>
          </Game.TeamWrapper>
        </Game>
      ))}
    </ul>
  );
}
