import { useEffect, useState } from "react";
import { usersToFetch } from "../constants/username";
import Card from "../components/card";
import ScrollContainer from "react-indiana-drag-scroll";
import Image from "next/image";

interface user {
  username: string;
  avatar: string;
  weekly: any;
  lifetime: any;
}

enum CardType {
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

const Home = ({ fetchedUsers }: any) => {
  const [users, setUsers] = useState<user[]>([]);

  useEffect(() => {
    setUsers(JSON.parse(fetchedUsers));
  }, []);

  useEffect(() => {}, [users]);

  const getRank = (kd: any) => {
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

  return (
    <>
      <div className="text-center page-header">
        <h1>The APEX - The board of sweat</h1>
      </div>
      <div className="container-fluid container-bottom-half">
        <div>
          <ScrollContainer className="scroll-container">
            <div className="d-flex justify-content-start align-items-center ">
              <div className="first-card">
                <h1 className="text-center lifetime">Weekly</h1>
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
                <h1 className="text-center lifetime">Lifetime</h1>
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

export async function getServerSideProps() {
  const API = require("call-of-duty-api")({ platform: "battle" });
  await API.login("hazaraskari@gmail.com", "#VfTMC!%WanZ5B#");

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
                Wallbangs: weeklyWallbangs
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
          weeklyWallbangs
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
  };
}

export default Home;
