import { useEffect, useState } from "react";
import { usersToFetch } from "../constants/username";

const Home = ({ fetchedUsers }: any) => {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    setUsers(JSON.parse(fetchedUsers));
  }, []);

  useEffect(() => {
    console.log(users);
  }, [users]);

  return (
    <>
      <h1>Lifetime</h1>

      {users.map((user, i) => (
        <div className="card" key={i}>
          <div>
            <strong>Name</strong>: {user.username}
          </div>
          <div>
            <strong>K/D</strong>: {user.lifetime.kdRatio.toFixed(2)}
          </div>
          <div>
            <strong>Accuracy</strong>:{" "}
            {(user.lifetime.accuracy * 100).toFixed(2)}%
          </div>
          <div>
            <strong>Top 5</strong>: {user.lifetime.topFive}
          </div>
          <div>
            <strong>Games played</strong>: {user.lifetime.gamesPlayed}
          </div>
          <div>
            <strong>Wins</strong>: {user.lifetime.wins}
          </div>
        </div>
      ))}

      <h1>Weekly</h1>
      {users.map((user, i) => (
        <div className="card" key={i}>
          <div>
            <strong>Name</strong>: {user.username}
          </div>
          <div>
            <strong>K/D</strong>: {user.weekly.kdRatio.toFixed(2)}{" "}
            {user.weekly.kdRatio.toFixed(2) > user.lifetime.kdRatio.toFixed(2)
              ? "going up"
              : "going down"}
          </div>
          <div>
            <strong>Accuracy</strong>: {(user.weekly.accuracy * 100).toFixed(2)}
            %
          </div>
          <div>
            <strong>Top 5</strong>: {user.weekly.topFive}
          </div>
          <div>
            <strong>Games played</strong>: {user.weekly.gamesPlayed}
          </div>
          <div>
            <strong>Wins</strong>: {user.weekly.wins}
          </div>
          <div>
            <strong>Avg life</strong>:{" "}
            {(user.weekly.avgLifeTime / 60).toFixed()} mins
          </div>
        </div>
      ))}
    </>
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
