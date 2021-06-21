import { Badge, mappedWeeklyUser, User } from "../types/types";

export const userBadgeMapper = (mappedUsers: mappedWeeklyUser[]) => {
  const deletedUsersFromList: mappedWeeklyUser[] = [];

  Object.keys(Badge).forEach((badge) => {
    // pitbull i første omgang
    mappedUsers.forEach((user, i) => {
      if (user.badges.length >= 2 || user.data.weeklyMatchesPlayed <= 20) {
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
