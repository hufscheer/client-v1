export interface MatchListType extends MatchType {
  gameId: number;
  sportsName: string;
}

export interface MatchType {
  gameTeams: MatchTeamType[];
  startTime: string;
  gameQuarter: string;
  gameName: string;
}

export type MatchTeamType = {
  gameTeamId: number;
  gameTeamName: string;
  logoImageUrl: string;
  score: number;
};

export type MatchCheerType = {
  gameTeamId: number;
  cheerCount: number;
};

export type MatchRecordsType = {
  scoredAt: number;
  playerName: string;
  teamName: string;
  score: number;
};

// TODO 추후 회의를 통해 Quarter 타입을 특정하고 유니온 타입으로 사용할 것
export type MatchTimelineType = {
  gameQuarter: string;
  records: MatchRecordsType[];
};

export type MatchLineupType = {
  gameTeamId: number;
  teamName: string;
  gameTeamPlayers: MatchPlayerType[];
};

export type MatchPlayerType = {
  playerName: string;
  description: string;
};

export type MatchCommentType = {
  id: number;
  content: string;
  createdAt: string;
  isBlocked: boolean;
};
