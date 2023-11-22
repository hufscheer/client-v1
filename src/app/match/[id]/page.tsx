'use client';

// import Link from 'next/link';

import { Suspense } from 'react';

import { GameBanner } from '@/components/common/Game';
// import CommentList from '@/components/detail/CommentList';
// import GameInfo from '@/components/detail/GameInfo';
// import GameTimeline from '@/components/detail/GameTimeline';
import MatchByIdFetcher from '@/queries/useMatchById/Fetcher';

export default function DetailPage({ params }: { params: { id: string } }) {
  return (
    <Suspense fallback={<div>로딩 중...</div>}>
      <MatchByIdFetcher matchId={params.id}>
        {data => (
          <GameBanner {...data} className="flex flex-col">
            <GameBanner.Label className="absolute left-2 top-2" />
            <div className="flex h-full items-center justify-around">
              <GameBanner.Team
                teamIndex={1}
                className="flex flex-col items-center"
              />
              <GameBanner.Score teamIndex={1} />
              <GameBanner.Status />
              <GameBanner.Score teamIndex={2} />
              <GameBanner.Team
                teamIndex={2}
                className="flex flex-col items-center"
              />
            </div>
          </GameBanner>
        )}
      </MatchByIdFetcher>
    </Suspense>
  );

  // const { gameDetail } = useGameDetail(params.id);
  // useEffect(() => {
  //   const getGameData = async () => {
  //     const res = await getGameDetail(Number(gameId));

  //     if (typeof res === 'number') return notFound();

  //     setGameData(res);
  //   };
  //   getGameData();
  //   const token = localStorage.getItem('token');
  //   if (!token) return;
  //   setIsLoggedIn(true);
  // }, [gameId]);

  // return (
  // <Suspense fallback={<div>로딩 중...</div>}>
  //   <Game {...gameDetail}>
  //     <Game.Label />
  //     <Game.Team teamIndex={1} />
  //     <Game.Score teamIndex={1} />
  //     <Game.Score teamIndex={2} />
  //     <Game.Team teamIndex={2} />
  //   </Game>
  // </Suspense>
  // <div className="flex flex-col gap-8">
  //   {isLoggedIn && (
  //     <Link
  //       href={`/detail/${gameId}/modify`}
  //       className="w-fit rounded-lg border border-red-500 bg-red-400 p-2 text-white"
  //     >
  //       수정
  //     </Link>
  //   )}
  //   {gameData && <GameInfo game={gameData} />}
  //   {isLoggedIn && (
  //     <Link href={`/detail/${gameId}/status`} className="text-right">
  //       전/후반 변경하러 가기
  //     </Link>
  //   )}
  //   {gameData && (
  //     <GameTimeline records={gameData.records} status={gameData.gameStatus} />
  //   )}
  //   {gameData && <CommentList gameId={gameData.id} />}
  // </div>
  // )
}
