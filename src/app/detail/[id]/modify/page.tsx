'use client';

import { useParams, useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

import { postGameScore } from '@/api/admin';
import { getGameDetail } from '@/api/game';
import { Game } from '@/components/common/Game';
import Input from '@/components/common/Input/Input';
import Select from '@/components/common/Select/Select';
import { GameDetailType } from '@/types/game';
import { getUtcHours } from '@/utils/utc-times';

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
  const [detailOfGame, setDetailOfGame] = useState<GameDetailType>();

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
    const getInformsOfGame = async () => {
      const id = Number(params.id);
      const detailOfGame = await getGameDetail(id);

      if (typeof detailOfGame === 'number') return;

      setDetailOfGame(detailOfGame);
    };

    getInformsOfGame();
  }, [params.id]);

  return (
    <form onSubmit={handleSubmit}>
      <Game>
        <Game.Label>
          <div
            className={`text-red-400 ${
              detailOfGame?.gameStatus === 'FIRST_HALF' ||
              detailOfGame?.gameStatus === 'SECOND_HALF'
                ? 'text-red-400'
                : 'text-gray-400'
            }`}
          >
            {detailOfGame?.gameStatus === 'BEFORE' && '경기 예정'}
            {detailOfGame?.gameStatus === 'END' && '경기 종료'}
            {detailOfGame?.gameStatus === 'BREAK_TIME' && '휴식 시간'}
            {detailOfGame?.gameStatus === 'FIRST_HALF' ||
              (detailOfGame?.gameStatus === 'SECOND_HALF' && 'LIVE')}
          </div>
        </Game.Label>

        <Game.TeamWrapper direction="col">
          <Game.TeamLogo
            src={detailOfGame?.firstTeam.logoImageUrl}
            alt={`${detailOfGame?.firstTeam.name}팀 로고`}
          />
          <Game.TeamName>{detailOfGame?.firstTeam.name}</Game.TeamName>
        </Game.TeamWrapper>

        <Game.Score
          firstTeamScore={detailOfGame?.firstTeamScore || 0}
          secondTeamScore={detailOfGame?.secondTeamScore || 0}
        />

        <Game.TeamWrapper direction="col">
          <Game.TeamLogo
            src={detailOfGame?.secondTeam.logoImageUrl}
            alt={`${detailOfGame?.secondTeam.name}팀 로고`}
          />
          <Game.TeamName>{detailOfGame?.secondTeam.name}</Game.TeamName>
        </Game.TeamWrapper>
      </Game>
      <label htmlFor="playerName" className="my-5">
        선수 이름
        <Input
          id="playerName"
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
        <option value={detailOfGame?.firstTeam.id}>
          {detailOfGame?.firstTeam.name}
        </option>
        <option value={detailOfGame?.secondTeam.id}>
          {detailOfGame?.secondTeam.name}
        </option>
      </Select>

      <label htmlFor="scoreTime">
        득점 시간
        <div className="flex justify-center items-center gap-1">
          <Input
            id="scoreTime"
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
        className="border border-slate-200 rounded-md bg-green-600 text-white py-2 px-4 w-full disabled:opacity-70 disabled:pointer-none"
      >
        저장하기
      </button>
    </form>
  );
}
