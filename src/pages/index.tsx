import { useEffect, useState } from "react";
import { usersToFetch } from "../constants/username";
import Card from "../components/card"

interface user {
  username: string;
  avatar: string;
  weekly: any;
  lifetime: any;

}

const Home = ({ fetchedUsers }: any) => {
  const [users, setUsers] = useState<user[]>([]);

  useEffect(() => {
    setUsers(JSON.parse(fetchedUsers));
  }, []);

  useEffect(() => {
    console.log(users);
  }, [users]);

  return (
    <div className="container">
      <div className="container-fluid">
      <h1 className="text-center">Lifetime</h1>
        <div className="row align-items-start">
          <div className="col">
            {users.sort((a,b) => b.lifetime.kdRatio-a.lifetime.kdRatio).map((user, i) => {
              const mappedUser = {data: user.lifetime, username: user.username, avatar: user.avatar}
              return (<Card user={mappedUser} key={i} /> )
            })}
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <h1 className="text-center">Weekly</h1>
        {users.sort((a,b) => b.weekly.kdRatio-a.weekly.kdRatio).map((user, i) => {
          const mappedUSer = {data: user.weekly, username: user.username, avatar: user.avatar, positiveWeeklyKD: user.weekly.kdRatio > user.lifetime.kdRatio}
          return (<Card user={mappedUSer}  key={i}/> )
        })}
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
      console.log("sjekker data", data.weekly);
      
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
        avatar: user.avatar
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
