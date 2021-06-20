import { Badge, User } from "../types/types";

export const getBadges = (user: any, users: any[]) => {
  const badges: any[] = [];

  const usersCopy = [...users];
  usersCopy.splice(
    users.findIndex((x) => x.username === user.username),
    1
  );

  if (
    usersCopy.every(
      (x: User) =>
        user.weekly.weeklyDamageTaken / user.weekly.weeklyMatchesPlayed >
        x.weekly.weeklyDamageTaken / x.weekly.weeklyMatchesPlayed
    )
  ) {
    badges.push(Badge.shield);
  }

  if (
    usersCopy.every(
      (x: User) =>
        user.weekly.weeklyDistanceTraveled / user.weekly.weeklyMatchesPlayed >
        x.weekly.weeklyDistanceTraveled / x.weekly.weeklyMatchesPlayed
    )
  ) {
    badges.push(Badge.traveler);
  }

  if (
    usersCopy.every(
      (x: User) =>
        user.weekly.weeklyHeadshotPercentage > x.weekly.weeklyHeadshotPercentage
    )
  ) {
    badges.push(Badge.deadeye);
  }

  if (
    usersCopy.every(
      (x: User) =>
        user.weekly.weeklyDamageDone / user.weekly.weeklyMatchesPlayed >
        x.weekly.weeklyDamageDone / x.weekly.weeklyMatchesPlayed
    )
  ) {
    badges.push(Badge.pitbull);
  }
  if (
    usersCopy.every(
      (x: User) =>
        user.weekly.weeklyDeaths / user.weekly.weeklyMatchesPlayed >
        x.weekly.weeklyDeaths / x.weekly.weeklyMatchesPlayed
    )
  ) {
    badges.push(Badge.martyr);
  }

  return badges;
};
