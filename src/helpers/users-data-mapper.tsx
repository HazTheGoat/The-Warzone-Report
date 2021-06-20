import { Badge, mappedWeeklyUser, User } from "../types/types";
import { getBadges } from "./badges";
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

  // loop through each badge in the badges list
  // for each badge, check first if the user has less than 2 badges, if true, continue, if false, break;
  // check if the user meets the criteria for the badge. if so, apply the badge.

  const deletedUsersFromList: mappedWeeklyUser[] = [];

  Object.keys(Badge).forEach((badge) => {
    // pitbull i første omgang
    mappedUsers.forEach((user, i) => {
      if (user.badges.length >= 2) {
        deletedUsersFromList.push(user);

        mappedUsers.splice(
          mappedUsers.findIndex((x) => x.username === user.username),
          1
        );

        return;
      }

      switch (badge) {
        case Badge.pitbull:
          if (
            mappedUsers.every(
              (x: mappedWeeklyUser) =>
                x.badges.length < 2 &&
                user.data.weeklyDamageDone / user.data.weeklyMatchesPlayed >=
                  x.data.weeklyDamageDone / x.data.weeklyMatchesPlayed
            )
          ) {
            console.log({ user: user.username, badge });
            user.badges.push(badge);
          }
          break;
        case Badge.deadeye:
          if (
            mappedUsers.every(
              (x: mappedWeeklyUser) =>
                x.badges.length < 2 &&
                user.data.weeklyHeadshotPercentage >=
                  x.data.weeklyHeadshotPercentage
            )
          ) {
            console.log({ user: user.username, badge });
            user.badges.push(badge);
          }
          break;
        case Badge.shield:
          if (
            mappedUsers.every(
              (x: mappedWeeklyUser) =>
                x.badges.length < 2 &&
                user.data.weeklyDamageTaken / user.data.weeklyMatchesPlayed >=
                  x.data.weeklyDamageTaken / x.data.weeklyMatchesPlayed
            )
          ) {
            console.log({ user: user.username, badge });
            user.badges.push(badge);
          }
          break;
        case Badge.martyr:
          if (
            mappedUsers.every(
              (x: mappedWeeklyUser) =>
                x.badges.length < 2 &&
                user.data.weeklyDamageDone / user.data.weeklyMatchesPlayed >=
                  x.data.weeklyDamageDone / x.data.weeklyMatchesPlayed
            )
          ) {
            console.log({ user: user.username, badge });
            user.badges.push(badge);
          }
          break;
        case Badge.traveler:
          if (
            mappedUsers.every(
              (x: mappedWeeklyUser) =>
                x.badges.length < 2 &&
                user.data.weeklyDistanceTraveled /
                  user.data.weeklyMatchesPlayed >=
                  x.data.weeklyDistanceTraveled / x.data.weeklyMatchesPlayed
            )
          ) {
            console.log({ user: user.username, badge });
            user.badges.push(badge);
          }
          break;
      }
    });
  });

  return mappedUsers
    .concat(deletedUsersFromList)
    .sort(
      (a: mappedWeeklyUser, b: mappedWeeklyUser) =>
        b.data.weeklyKdRatio - a.data.weeklyKdRatio
    );
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
