import { useEffect, useState } from "react";
import Card from "../components/card";
import ScrollContainer from "react-indiana-drag-scroll";
import Image from "next/image";
import { mappedLifetimeUser, mappedWeeklyUser, User } from "../types/types";
import {
  getRank,
  getBadges,
  getMappedWeeklyUsers,
  getMappedLifetimeUsers,
} from "../helpers/helpers";
import { usersToFetch } from "../constants/username";
import PageHeader from "../components/Header";
import WeeklyContainer from "../components/WeeklyContainer";
import LifetimeContainer from "../components/LifetimeContainer";

const Home = ({ fetchedUsers }: any) => {
  const [users, setUsers] = useState<User[]>([]);
  const [weeklyUser, setWeeklyUser] = useState<mappedWeeklyUser[]>([]);
  const [lifetimeUser, setLifetimeUser] = useState<mappedLifetimeUser[]>([]);

  useEffect(() => {
    setUsers(JSON.parse(fetchedUsers));
  }, []);

  useEffect(() => {
    const mappedWeeklyUsers = getMappedWeeklyUsers(users);
    const mappedLifetimeUsers = getMappedLifetimeUsers(users);
    setWeeklyUser(mappedWeeklyUsers);
    setLifetimeUser(mappedLifetimeUsers);
  }, [users]);

  return (
    <>
      <PageHeader></PageHeader>
      <div className="container-fluid container-bottom-half">
        <div>
          <ScrollContainer className="scroll-container">
            <WeeklyContainer users={weeklyUser}></WeeklyContainer>
          </ScrollContainer>
        </div>
      </div>

      <div className="container-fluid container-top-half">
        <div>
          <ScrollContainer className="scroll-container">
            <LifetimeContainer users={lifetimeUser}></LifetimeContainer>
          </ScrollContainer>
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const API = require("call-of-duty-api")({ platform: "battle" });
  await API.login(process.env.BATTLE_USERNAME, process.env.BATTLE_PW);

  const mappedUsers = await usersToFetch.map(async (user) => {
    try {
      let data = await API.MWwz(user.username, user.platform);

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
    } catch (error) {}
  });

  const fetchedUsersAsJSON = await Promise.all(mappedUsers).then((x) => {
    return JSON.stringify(x.filter((user) => user));
  });

  return {
    props: {
      fetchedUsers: fetchedUsersAsJSON,
    },
    revalidate: 1800,
  };
}

export default Home;
