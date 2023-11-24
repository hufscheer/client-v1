import { MatchLineupType } from '@/types/match';

import LineupItem from '../LineupItem';

export default function Lineup({ teamName, gameTeamPlayers }: MatchLineupType) {
  return (
    <div>
      <div className="mb-3 px-4 text-primary">{teamName}</div>
      <ul className="relative px-4">
        {gameTeamPlayers.map((player, idx) => (
          <LineupItem key={player.playerName + idx} {...player} />
        ))}
      </ul>
    </div>
  );
}
