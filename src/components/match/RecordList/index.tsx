import { AxiosError } from 'axios';

import { FallbackProps } from '@/components/common/ErrorBoundary';
import { TIMELINE_API_ERROR_MESSAGE } from '@/constants/error';
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

RecordList.ErrorFallback = function ErrorFallback({
  error,
  resetErrorBoundary,
}: FallbackProps) {
  let message;

  if (error instanceof AxiosError) {
    const code = error.code;

    message =
      TIMELINE_API_ERROR_MESSAGE[
        code as keyof typeof TIMELINE_API_ERROR_MESSAGE
      ];
  } else if (error instanceof Error) {
    message = '타임라인이 등록되지 않았어요!';
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-5 rounded-xl py-10">
      <span className="text-gary-5">⚠️ {message}</span>

      <button
        onClick={resetErrorBoundary}
        className="text-primary underline-offset-1"
      >
        새로고침
      </button>
    </div>
  );
};
