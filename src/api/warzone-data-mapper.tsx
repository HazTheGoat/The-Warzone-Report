import { User } from "../types/types";

export const warzoneDataMapper = (data: any, user: any) => {
  const {
    weekly: {
      all: {
        properties: { accuracy: weeklyAccuracy },
      },
      mode: {
        br_all: {
          properties: {
            matchesPlayed: weeklyMatchesPlayed,
            kdRatio: weeklyKdRatio,
            gulagKills,
            distanceTraveled: weeklyDistanceTraveled,
            killsPerGame: weeklyKillsPerGame,
            damageDone: weeklyDamageDone,
            avgLifeTime: weeklyAvgLifeTime,
            headshotPercentage: weeklyHeadshotPercentage,
            damageTaken: weeklyDamageTaken,
            Wallbangs: weeklyWallbangs,
            assists: weeklyAssists,
            deaths: weeklyDeaths,
          },
        },
      },
    },
    lifetime: {
      all: {
        properties: { accuracy: lifetimeAccuracy },
      },
      mode: {
        br: {
          properties: {
            kdRatio: lifetimeKdRatio,
            topFive,
            gamesPlayed,
            wins,
            avgLifeTime,
          },
        },
      },
    },
  } = data;

  return {
    weekly: {
      weeklyAccuracy,
      weeklyKdRatio,
      gulagKills,
      weeklyMatchesPlayed,
      weeklyKillsPerGame,
      weeklyDamageDone,
      weeklyAvgLifeTime,
      weeklyHeadshotPercentage,
      weeklyDamageTaken,
      weeklyWallbangs,
      weeklyAssists,
      weeklyDistanceTraveled,
      weeklyDeaths,
    },
    lifetime: {
      lifetimeKdRatio,
      topFive,
      gamesPlayed,
      lifetimeAccuracy,
      wins,
      avgLifeTime,
    },
    username: user.name,
    avatar: user.avatar,
  } as User;
};
