'use client';

import { postGameScore } from '@/api/admin';
import { getEachGame } from '@/api/game';
import { Game } from '@/components/common/Game';
import Input from '@/components/common/Input/Input';
import Select from '@/components/common/Select/Select';
import { GameDetail } from '@/types/game';
import { getUtcHours } from '@/utils/utc-times';
import { useParams, useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

export default function GameModify() {
  const router = useRouter();
  const params = useParams();
  const id = Number(params.id);
  const [gameData, setGameData] = useState({
    playerName: '',
    team: 0,
    hour: new Date().getHours(),
    minute: new Date().getMinutes(),
  });
  const [gameDetail, setGameDetail] = useState<GameDetail>();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    setGameData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const date = getUtcHours({ hour: gameData.hour, minute: gameData.minute });

    postGameScore(id, {
      playerName: gameData.playerName,
      team: gameData.team,
      scoredAt: date,
    }).then(() => router.push('/'));
  };

  useEffect(() => {
    const getGameInfo = async () => {
      const id = Number(params.id);
      const gameDetail = await getEachGame(id);

      if (typeof gameDetail === 'number') return;

      setGameDetail(gameDetail);
    };

    getGameInfo();
  }, [params.id]);

  return (
    <form onSubmit={handleSubmit}>
      <Game>
        <Game.Label>
          <div
            className={`text-red-400 ${
              gameDetail?.gameStatus === 'FIRST_HALF' ||
              gameDetail?.gameStatus === 'SECOND_HALF'
                ? 'text-red-400'
                : 'text-gray-400'
            }`}
          >
            {gameDetail?.gameStatus === 'BEFORE' && '경기 예정'}
            {gameDetail?.gameStatus === 'END' && '경기 종료'}
            {gameDetail?.gameStatus === 'BREAK_TIME' && '휴식 시간'}
            {gameDetail?.gameStatus === 'FIRST_HALF' ||
              (gameDetail?.gameStatus === 'SECOND_HALF' && 'LIVE')}
          </div>
        </Game.Label>

        <Game.TeamWrapper direction="col">
          <Game.TeamLogo
            src={gameDetail?.firstTeam.logoImageUrl}
            alt={`${gameDetail?.firstTeam.name}팀 로고`}
          />
          <Game.TeamName>{gameDetail?.firstTeam.name}</Game.TeamName>
        </Game.TeamWrapper>

        <Game.Score
          firstTeamScore={gameDetail?.firstTeamScore || 0}
          secondTeamScore={gameDetail?.secondTeamScore || 0}
        />

        <Game.TeamWrapper direction="col">
          <Game.TeamLogo
            src={gameDetail?.secondTeam.logoImageUrl}
            alt={`${gameDetail?.secondTeam.name}팀 로고`}
          />
          <Game.TeamName>{gameDetail?.secondTeam.name}</Game.TeamName>
        </Game.TeamWrapper>
      </Game>
      <label className="my-5">
        선수 이름
        <Input
          name="playerName"
          value={gameData.playerName}
          onChange={handleChange}
          required
        />
      </label>

      <p>득점한 팀</p>
      <Select
        name="team"
        value={gameData.team}
        onChange={handleChange}
        required
        placeholder="팀을 선택해주세요."
      >
        <option value={gameDetail?.firstTeam.id}>
          {gameDetail?.firstTeam.name}
        </option>
        <option value={gameDetail?.secondTeam.id}>
          {gameDetail?.secondTeam.name}
        </option>
      </Select>

      <label>
        득점 시간
        <div className="flex items-center justify-center gap-1">
          <Input
            type="number"
            name="hour"
            value={gameData.hour}
            onChange={handleChange}
            min={0}
            max={23}
            maxLength={2}
          />
          :
          <Input
            type="number"
            name="minute"
            value={gameData.minute}
            onChange={handleChange}
            min={0}
            max={59}
            maxLength={2}
          />
        </div>
      </label>
      <button
        type="submit"
        className="w-full px-4 py-2 text-white bg-green-600 border rounded-md border-slate-200 disabled:opacity-70 disabled:pointer-none"
      >
        저장하기
      </button>
    </form>
  );
}
