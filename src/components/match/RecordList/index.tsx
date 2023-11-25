import { MatchTimelineType } from '@/types/match';

import RecordItem from '../RecordItem';

export default function RecordList({
  gameQuarter,
  records,
}: MatchTimelineType) {
  return (
    <>
      <div className="mb-3 text-primary">{gameQuarter}</div>
      <ol className="ms-5 border-s">
        {records.map(record => (
          <RecordItem key={record.scoredAt} {...record} />
        ))}
      </ol>
    </>
  );
}
