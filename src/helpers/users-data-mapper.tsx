import { mappedWeeklyUser, User } from "../types/types";
import { userBadgeMapper } from "./badges";
import { getRank } from "./rank";

export const weeklyDataMapper = (users: User[]) => {
  const mappedUsers: mappedWeeklyUser[] = users.map(
    (user: User, i: number) => ({
      data: user.weekly,
      username: user.username,
      avatar: user.avatar,
      positiveWeeklyKD:
        user.weekly.weeklyKdRatio > user.lifetime.lifetimeKdRatio,
      rank: getRank(user.weekly.weeklyKdRatio),
      badges: [],
    })
  );

  return userBadgeMapper(mappedUsers);
};

export const lifetimeDataMapper = (users: User[]) => {
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
