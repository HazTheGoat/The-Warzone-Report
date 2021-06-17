import { useEffect, useState } from "react";
import Card from "../components/card";
import ScrollContainer from "react-indiana-drag-scroll";
import Image from "next/image";
import { User } from "../types/types";
import { getRank } from "../helpers/helpers";
import { usersToFetch } from "../constants/username";

const Home = ({ fetchedUsers }: any) => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    setUsers(JSON.parse(fetchedUsers));
  }, []);

  return (
    <>
      <div className="text-center page-header">
        <div className="help neon neon-orange">
          <a href="mailto: hazaraskari@gmail.com">
            We can help you set up your very own
          </a>
        </div>
        <h1 className="neon neon-header neon-teal" data-text="U">
          The W<span className="flicker-slow t">a</span>rzone R
          <span className="flicker-fast">e</span>po
          <span className="flicker-very-slow">r</span>t
        </h1>
      </div>
      <div className="container-fluid container-bottom-half">
        <div>
          <ScrollContainer className="scroll-container">
            <div className="d-flex justify-content-start align-items-center ">
              <div className="first-card">
                <h1 className="text-center lifetime ">Weekly stats</h1>
                <div>Scroll by mouse dragging</div>
                <div className="svg-container bounce text-center t">
                  <Image
                    width="50"
                    height="50"
                    layout={"fixed"}
                    objectFit={"contain"}
                    src={`/arrow-right.png`}
                  />
                </div>
              </div>
              {users
                .sort((a, b) => b.weekly.weeklyKdRatio - a.weekly.weeklyKdRatio)
                .map((user, i) => {
                  const mappedUSer = {
                    data: user.weekly,
                    username: user.username,
                    avatar: user.avatar,
                    positiveWeeklyKD:
                      user.weekly.weeklyKdRatio > user.lifetime.lifetimeKdRatio,
                    rank: getRank(user.weekly.weeklyKdRatio),
                  };
                  return (
                    <div key={i}>
                      <Card user={mappedUSer} />
                    </div>
                  );
                })}
            </div>
          </ScrollContainer>
        </div>
      </div>
      <div className="container-fluid container-top-half">
        <div>
          <ScrollContainer className="scroll-container">
            <div className="d-flex justify-content-start align-items-center ">
              <div className="first-card">
                <h1 className="text-center lifetime ">Lifetime stats</h1>
                <div>Scroll by mouse dragging</div>
                <div className="svg-container bounce text-center">
                  <Image
                    width="50"
                    height="50"
                    layout={"fixed"}
                    objectFit={"contain"}
                    src={`/arrow-right.png`}
                  />
                </div>
              </div>
              {users
                .sort(
                  (a, b) =>
                    b.lifetime.lifetimeKdRatio - a.lifetime.lifetimeKdRatio
                )
                .map((user, i) => {
                  const mappedUser = {
                    data: user.lifetime,
                    username: user.username,
                    avatar: user.avatar,
                    rank: getRank(user.lifetime.lifetimeKdRatio),
                  };
                  return (
                    <div key={i}>
                      <Card user={mappedUser} />
                    </div>
                  );
                })}
            </div>
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
                killsPerGame: weeklyKillsPerGame,
                damageDone: weeklyDamageDone,
                avgLifeTime: weeklyAvgLifeTime,
                headshotPercentage: weeklyHeadshotPercentage,
                damageTaken: weeklyDamageTaken,
                Wallbangs: weeklyWallbangs,
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
