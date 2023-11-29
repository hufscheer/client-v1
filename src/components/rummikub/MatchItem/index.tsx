import { MatchCard } from '@/components/common/MatchCard';
import { MatchType } from '@/types/match';

export default function RummiKubMatchItem(match: MatchType) {
  return (
    <MatchCard {...match} className="flex flex-col">
      <MatchCard.Label className="mb-2 border-b-2 border-b-gray-5 px-1 pb-1" />
      <div className="flex h-full min-h-[180px] flex-col items-center justify-around rounded-xl bg-gray-1 shadow-lg">
        <MatchCard.Background
          viewBox="-13 117 120 50"
          width={150}
          height={170}
          className="z-[0] h-[180px] fill-primary"
        />
        <MatchCard.Status className="my-2 text-black" />

        <div className="z-10 flex items-center justify-center gap-4">
          {match.gameTeams.map(team => (
            <div
              key={team.gameTeamId}
              className="flex flex-col items-center justify-center"
            >
              <MatchCard.Team
                teamIndex={team.order}
                className="flex flex-col items-center justify-center [&>img]:my-0"
              />
              <MatchCard.Score teamIndex={team.order} />
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center"></div>
      </div>
    </MatchCard>
  );
}
