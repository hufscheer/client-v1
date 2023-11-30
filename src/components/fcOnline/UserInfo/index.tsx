import { divisionMap } from '@/constants/divisionRank';
import { FconlineLineupType } from '@/queries/useFconlineLineupById/Fetcher';

export default function FconlineUserLineup({
  userInfos,
}: {
  userInfos: FconlineLineupType[];
}) {
  return (
    <div className="grid grid-cols-2 items-center justify-items-center py-10">
      {userInfos.map(info => (
        <div
          key={info.accessId}
          className="w-full px-4 first-of-type:border-r-2"
        >
          <div className="mb-3 flex items-center gap-1 font-bold">
            <span className="font-bold">{info.teamName}</span>
            <span>선수 👊</span>
          </div>
          <div className="mb-2 flex flex-col">
            <span className="text-xs font-bold leading-tight text-primary">
              NICKNAME
            </span>
            <div>{info.nickname}</div>
          </div>
          <div className="mb-2 flex flex-col">
            <span className="text-xs font-bold leading-tight text-primary">
              LEVEL
            </span>
            <div>LV. {info.level}</div>
          </div>
          <div className="mb-2 flex flex-col">
            <span className="text-xs font-bold leading-tight text-primary">
              RANK
            </span>
            <div>{divisionMap.get(info.division)}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
