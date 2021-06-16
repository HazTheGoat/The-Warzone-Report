export interface UserHeader {
  platform: string;
  username: string;
}

export interface User {
  username: string;
  avatar: string;
  weekly: any;
  lifetime: any;
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
