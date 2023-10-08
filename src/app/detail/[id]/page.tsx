import { getEachGame } from '@/api/game';
import GameComments from '@/components/detail/GameComments';
import GameInfo from '@/components/detail/GameInfo';
import GameTimeline from '@/components/detail/GameTimeline';
import { notFound } from 'next/navigation';

export default async function detailPage({
  params,
}: {
  params: { id: number };
}) {
  const gameID = params.id;
  const gameData = await getEachGame(gameID);
  if (typeof gameData === 'number') return notFound();
  return (
    <div className="flex flex-col gap-8">
      <GameInfo game={gameData} />
      <GameTimeline records={gameData.records} status={gameData.gameStatus} />
      <GameComments gameID={gameData.id} />
    </div>
  );
}
