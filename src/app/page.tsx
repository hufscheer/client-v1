'use client';

export default function Home() {
  return (
    <main className="flex w-full flex-col gap-3">
      <p className="my-2 text-center text-xl font-bold">매치</p>
      <div className="flex flex-col gap-8">
        {/**DUMMY_GAME.map(game => (
          <Game records={[]} videoId={''} key={game.id} {...game}>
            <Game.Label className="mb-2 border-b-[1px] border-black pb-1" />
            <div className="flex items-center">
              <Game.Team teamIndex={1} />
              <Game.Score teamIndex={1} />
              <Game.Status />
              <Game.Score teamIndex={2} />
              <Game.Team teamIndex={2} />
            </div>
          </Game>
        ))*/}
      </div>
    </main>
  );
}
