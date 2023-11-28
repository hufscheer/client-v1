import { LeagueType } from '@/types/admin/league';
import { parseTimeString } from '@/utils/time';

export default function LeagueContent({ name, startAt, endAt }: LeagueType) {
  const {
    month: sMonth,
    date: sDate,
    hours: sHours,
    minutes: sMinutes,
  } = parseTimeString(startAt);
  const {
    month: eMonth,
    date: eDate,
    hours: eHours,
    minutes: eMinutes,
  } = parseTimeString(endAt);

  return (
    <div className="m-2 my-4 flex items-center justify-between">
      <div className="text-3xl">{name}</div>
      <div className="grid grid-rows-2 space-y-1 overflow-hidden truncate text-sm text-gray-4">
        <span>
          시작: {sMonth}월 {sDate}일 {sHours}시 {sMinutes}분
        </span>
        <span>
          종료: {eMonth}월 {eDate}일 {eHours}시 {eMinutes}분
        </span>
      </div>
    </div>
  );
}
