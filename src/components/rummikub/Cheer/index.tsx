import { FallbackProps } from '@/components/common/ErrorBoundary';
import CheerTeam from '@/components/match/CheerTeam';
import { MatchCheerType } from '@/types/match';

type CheerProps = {
  cheers: MatchCheerType[];
};

export default function Cheer({ cheers }: CheerProps) {
  const [firstTeam, secondTeam, thirdTeam, fourthTeam] = cheers;

  return (
    <div className="min-h-10 relative my-5 flex h-full w-full justify-center gap-5 p-2">
      <div className="flex w-full flex-col gap-3">
        <CheerTeam className="bg-cheer-left">
          🤜
          <span className="ml-3">{firstTeam.cheerCount}</span>
        </CheerTeam>
        <CheerTeam className="bg-[#fb923c] ">
          🤜
          <span className="ml-3">{thirdTeam.cheerCount}</span>
        </CheerTeam>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 rounded-xl bg-white px-5 py-1 text-center font-bold text-gray-4">
        VS
      </div>
      <div className="flex w-full flex-col gap-3">
        <CheerTeam className="bg-cheer-right">
          <span className="mr-3">{secondTeam.cheerCount}</span>
          🤛
        </CheerTeam>
        <CheerTeam className="bg-[#22c55e]">
          <span className="mr-3">{fourthTeam.cheerCount}</span>
          🤛
        </CheerTeam>
      </div>
    </div>
  );
}

Cheer.ErrorFallback = function ErrorFallback({
  resetErrorBoundary,
}: FallbackProps) {
  return (
    <div className="min-h-10 relative my-5 flex h-full w-full flex-col items-center justify-center gap-5 p-2">
      <div className="flex flex-wrap justify-center gap-x-1">
        <span>응원하기를 불러올 수 없어요. </span>
        <span>잠시 후 다시 시도해주세요!</span>
      </div>
      <button onClick={resetErrorBoundary} className="text-primary">
        새로고침
      </button>
    </div>
  );
};
