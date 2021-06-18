import { User } from "../types/types";
import { getBadges } from "./badges";
import { getRank } from "./rank";

export const getMappedWeeklyUsers = (users: User[]) => {
  return users
    .sort((a: User, b: User) => b.weekly.weeklyKdRatio - a.weekly.weeklyKdRatio)
    .map((user: User, i: number) => ({
      data: user.weekly,
      username: user.username,
      avatar: user.avatar,
      positiveWeeklyKD:
        user.weekly.weeklyKdRatio > user.lifetime.lifetimeKdRatio,
      rank: getRank(user.weekly.weeklyKdRatio),
      badges: getBadges(user, users),
    }));
};

export const getMappedLifetimeUsers = (users: User[]) => {
  return users
    .sort(
      (a: User, b: User) =>
        b.lifetime.lifetimeKdRatio - a.lifetime.lifetimeKdRatio
    )
    .map((user: User, i: number) => ({
      data: user.lifetime,
      username: user.username,
      avatar: user.avatar,
      rank: getRank(user.lifetime.lifetimeKdRatio),
    }));
};
