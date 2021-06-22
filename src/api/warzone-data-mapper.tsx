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
            wallBangs: weeklyWallbangs,
            assists: weeklyAssists,
            deaths: weeklyDeaths,
            losses: weeklyLosses,
            kills: weeklyKills,
            wlratio: weeklyWinRatio,
            rank: weeklyRank,
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

  const mappedData: User = {
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
      weeklyLosses,
      weeklyKills,
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
  };
  console.log(data.lifetime.mode.br_all);

  return mappedData;
};
