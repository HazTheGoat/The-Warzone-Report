import { CardType } from "../types/types";

export const getRank = (kd: any) => {
  switch (true) {
    case kd < CardType.wood:
      return CardType[CardType.wood];

    case kd < CardType.bronze && kd > CardType.wood:
      return CardType[CardType.iron];

    case kd < CardType.silver && kd > CardType.iron:
      return CardType[CardType.bronze];

    case kd < CardType.gold && kd > CardType.bronze:
      return CardType[CardType.silver];

    case kd < CardType.platinum && kd > CardType.silver:
      return CardType[CardType.gold];

    case kd < CardType.diamond && kd > CardType.gold:
      return CardType[CardType.platinum];

    case kd < CardType.master && kd > CardType.platinum:
      return CardType[CardType.diamond];

    case kd < CardType.challenger && kd > CardType.diamond:
      return CardType[CardType.master];

    case kd < CardType.god && kd > CardType.master:
      return CardType[CardType.challenger];

    case kd > CardType.god:
      return CardType[CardType.god];

    default:
      return CardType[CardType.gold];
  }
};

export const getBadges = (user: any, users: any[]) => {
  const badges: any[] = [];

  const usersCopy = [...users];
  usersCopy.splice(
    users.findIndex((x) => x.username === user.username),
    1
  );

  if (
    usersCopy.every(
      (x) =>
        user.weekly.weeklyDamageTaken / user.weekly.weeklyMatchesPlayed >
        x.weekly.weeklyDamageTaken / x.weekly.weeklyMatchesPlayed
    )
  ) {
    badges.push("SHIELD");
  }

  if (
    usersCopy.every(
      (x) =>
        user.weekly.weeklyDistanceTraveled / user.weekly.weeklyMatchesPlayed >
        x.weekly.weeklyDistanceTraveled / x.weekly.weeklyMatchesPlayed
    )
  ) {
    badges.push("TRAVELER");
  }

  if (
    usersCopy.every(
      (x) =>
        user.weekly.weeklyHeadshotPercentage > x.weekly.weeklyHeadshotPercentage
    )
  ) {
    badges.push("DEADEYE");
  }

  if (
    usersCopy.every(
      (x) =>
        user.weekly.weeklyDamageDone / user.weekly.weeklyMatchesPlayed >
        x.weekly.weeklyDamageDone / x.weekly.weeklyMatchesPlayed
    )
  ) {
    badges.push("PITBULL");
  }
  if (
    usersCopy.every(
      (x) =>
        user.weekly.weeklyDamageDone / user.weekly.weeklyMatchesPlayed >
        x.weekly.weeklyDamageDone / x.weekly.weeklyMatchesPlayed
    )
  ) {
    badges.push("MARTYR");
  }

  return badges;
};
