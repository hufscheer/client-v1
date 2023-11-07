'use client';

import { notFound, useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

import { createNewGame } from '@/api/admin';
import { getTeams } from '@/api/team';
import Input from '@/components/common/Input/Input';
import Select from '@/components/common/Select/Select';
import useDate from '@/hooks/useDate';
import useValidate from '@/hooks/useValidate';
import { GameTeamType } from '@/types/game';

export default function Admin() {
  const router = useRouter();

  const { month, day } = useDate(new Date());
  const [teams, setTeams] = useState<GameTeamType[]>([]);
  const [gameData, setGameData] = useState({
    name: '삼건물대회',
    sportsName: '축구',
    firstTeam: 0,
    secondTeam: 0,
    date: '',
    time: '',
  });

  const { isError: isDateError } = useValidate(
    gameData.date,
    dateValue => new Date(dateValue) < new Date(`2023-${month}-${day}`),
  );
  const { isError: isTimeError } = useValidate(gameData.time, timeValue => {
    const [hour] = (timeValue as string).split(':').map(Number);

    return hour < 8 || hour > 18;
  });
  const { isError: isTeamError } = useValidate(
    gameData.secondTeam,
    teamValue => teamValue === gameData.firstTeam,
  );

  const handleInput = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    setGameData(prev => ({ ...prev, [name]: value }));
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isDateError || isTeamError || isTimeError) return;

    createNewGame({
      name: gameData.name,
      sportsName: gameData.sportsName,
      firstTeam: Number(gameData.firstTeam),
      secondTeam: Number(gameData.secondTeam),
      startTime: new Date(`${gameData.date}T${gameData.time}:00`),
    }).then(() => router.push('/'));
  };

  useEffect(() => {
    const loadTeams = async () => {
      const res = await getTeams();

      if (typeof res === 'number') return notFound();

      setTeams(res);
    };

    loadTeams();
  }, []);

  return (
    <form onSubmit={submitHandler} className="flex flex-col">
      <label>
        경기 시간
        <Input
          name="date"
          type="date"
          value={gameData.date}
          onChange={handleInput}
          min={`2023-${month}-${day.toString().padStart(2, '0')}`}
          max={'2023-12-12'}
          required
        />
        {isDateError && (
          <span className="text-sm text-red-400">
            현재 시간 이후로만 경기를 생성할 수 있어요!
          </span>
        )}
        <Input
          name="time"
          type="time"
          value={gameData.time}
          onChange={handleInput}
          step="1800"
          min="08:00"
          max="18:00"
          required
        />
        {isTimeError && (
          <span className="text-sm text-red-400">
            오전 8시 이후, 오후 6시 이전에만 경기를 시작할 수 있어요!
          </span>
        )}
      </label>
      <p>팀 선택</p>
      <Select
        name="firstTeam"
        required
        value={gameData.firstTeam}
        onChange={handleInput}
        placeholder="팀을 선택해주세요."
      >
        {teams.map(team => (
          <option key={team.id} value={team.id}>
            {team.name}
          </option>
        ))}
      </Select>
      <Select
        name="secondTeam"
        required
        value={gameData.secondTeam}
        onChange={handleInput}
        placeholder="팀을 선택해주세요."
      >
        {teams.map(team => (
          <option key={team.id} value={team.id}>
            {team.name}
          </option>
        ))}
      </Select>
      {isTeamError && (
        <div className="text-red-400 text-sm">팀을 다시 선택해주세요!</div>
      )}

      <label htmlFor="leagueName">
        경기 이름
        <Input
          id="leagueName"
          name="name"
          readOnly
          value={gameData.name}
          onChange={handleInput}
          className="text-gray-500"
        />
      </label>

      <label htmlFor="sportsName">
        종목 이름
        <Input
          id="sportsName"
          name="sportsName"
          readOnly
          value={gameData.sportsName}
          onChange={handleInput}
          className="text-gray-500"
        />
      </label>
      <button>저장하기</button>
    </form>
  );
}
