export type MatchType = {
  id: number;
  name: string;
  sportsName: string;
  startTime: string;
  firstTeamScore: number;
  secondTeamScore: number;
  gameStatus: MatchQuarterType;
  statusChangedAt: string;
  firstTeam: MatchTeamType;
  secondTeam: MatchTeamType;
};

export type MatchDetailType = {
  gameTeams: MatchTeamType[];
  startTime: string;
  videoId: number;
  gameQuarter: MatchQuarterType;
  gameName: string;
};

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

export type MatchTimelineType = {
  gameQuater: MatchQuarterType;
  records: MatchRecordsType[];
};

export type MatchCommentType = {
  id: number;
  content: string;
  createdAt: string;
  isBlocked: boolean;
};

export type MatchQuarterType = string;
