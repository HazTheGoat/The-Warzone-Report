import { useEffect, useState } from "react";
import { usersToFetch } from "../constants/username";
import Card from "../components/card";

interface user {
  username: string;
  avatar: string;
  weekly: any;
  lifetime: any;
}

enum CardType {
  "wood" = 0.5, // < .5
  "iron" = 0.7, // < .7
  "bronze" = 0.8, // < .8
  "silver" = 0.9, // < .9
  "gold" = 1, // 1
  "platinum" = 1.3, // 1.3
  "diamond" = 1.5, // 1.5
  "master" = 1.7, // 1.7
  "challenger" = 2, // 2
  "god" = 3, // 3
}

const Home = ({ fetchedUsers }: any) => {
  const [users, setUsers] = useState<user[]>([]);

  useEffect(() => {
    setUsers(JSON.parse(fetchedUsers));
  }, []);

  useEffect(() => {}, [users]);

  const getRank = (kd: any) => {
    console.log({ kd, enum: CardType.platinum });
    console.log(CardType[CardType.platinum]);

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
    <div className="container-fluid">
      <div className="">
        <h1 className="text-center">Lifetime</h1>
        <div className="row align-items-start">
          {users
            .sort((a, b) => b.lifetime.kdRatio - a.lifetime.kdRatio)
            .map((user, i) => {
              const mappedUser = {
                data: user.lifetime,
                username: user.username,
                avatar: user.avatar,
                rank: getRank(user.lifetime.kdRatio),
              };
              return (
                <div className="col" key={i}>
                  <Card user={mappedUser} />
                </div>
              );
            })}
        </div>
      </div>
      <div className="container-fluid">
        <h1 className="text-center">Weekly</h1>
        <div className="row align-items-start">
          {users
            .sort((a, b) => b.weekly.kdRatio - a.weekly.kdRatio)
            .map((user, i) => {
              const mappedUSer = {
                data: user.weekly,
                username: user.username,
                avatar: user.avatar,
                positiveWeeklyKD: user.weekly.kdRatio > user.lifetime.kdRatio,
                rank: getRank(user.weekly.kdRatio),
              };
              return (
                <div className="col" key={i}>
                  <Card user={mappedUSer} />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const API = require("call-of-duty-api")({ platform: "battle" });
  await API.login("hazaraskari@gmail.com", "#VfTMC!%WanZ5B#");

  const mappedUsers = await usersToFetch.map(async (user) => {
    try {
      let data = await API.MWwz(user.username, user.platform);

      const {
        weekly: {
          all: { properties },
        },
        lifetime: {
          all: {
            properties: { accuracy },
          },
          mode: {
            br: {
              properties: { kdRatio, topFive, gamesPlayed, wins, avgLifeTime },
            },
          },
        },
      } = data;

      return {
        weekly: { ...properties, accuracy },
        lifetime: {
          kdRatio,
          topFive,
          gamesPlayed,
          accuracy,
          wins,
          avgLifeTime,
        },
        username: user.name,
        avatar: user.avatar,
      };
    } catch (error) {}
  });

  const fetchedUsersAsJSON = await Promise.all(mappedUsers).then((x) =>
    JSON.stringify(x)
  );

  return {
    props: {
      fetchedUsers: fetchedUsersAsJSON,
    },
  };
}

export default Home;
