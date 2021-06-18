export interface UserHeader {
  platform: string;
  username: string;
}

export interface User {
  username: string;
  avatar: string;
  weekly: WeeklyStats;
  lifetime: LifetimeStats;
}

export interface LifetimeStats {
  lifetimeKdRatio: number;
  topFive: number;
  gamesPlayed: number;
  lifetimeAccuracy: number;
  wins: number;
  avgLifeTime: number;
}

export interface WeeklyStats {
  weeklyAccuracy: number;
  weeklyKdRatio: number;
  gulagKills: number;
  weeklyMatchesPlayed: number;
  weeklyKillsPerGame: number;
  weeklyDamageDone: number;
  weeklyAvgLifeTime: number;
  weeklyHeadshotPercentage: number;
  weeklyDamageTaken: number;
  weeklyWallbangs: number;
  weeklyAssists: number;
  weeklyDistanceTraveled: number;
  weeklyDeaths: number;
}

export interface mappedWeeklyUser {
  data: WeeklyStats;
  username: string;
  avatar: string;
  positiveWeeklyKD: boolean;
  rank: string;
  badges: string[];
}

export interface mappedLifetimeUser {
  data: LifetimeStats;
  username: string;
  avatar: string;
  rank: string;
}

export enum CardType {
  "wood" = 0.5,
  "iron" = 0.7,
  "bronze" = 0.8,
  "silver" = 0.9,
  "gold" = 1,
  "platinum" = 1.3,
  "diamond" = 1.5,
  "master" = 1.6,
  "challenger" = 2,
  "god" = 3,
}

export enum Badge {
  pitbull = "pitbull",
  deadeye = "deadeye",
  shield = "shield",
  martyr = "martyr",
  traveler = "traveler",
}
