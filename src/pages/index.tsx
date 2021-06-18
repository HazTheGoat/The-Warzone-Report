import { useEffect, useState } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import { mappedLifetimeUser, mappedWeeklyUser, User } from "../types/types";
import { usersToFetch } from "../constants/username";
import PageHeader from "../components/Header";
import WeeklyContainer from "../components/WeeklyContainer";
import LifetimeContainer from "../components/LifetimeContainer";
import { warzoneDataMapper } from "../api/warzone-data-mapper";
import { getMappedLifetimeUsers, getMappedWeeklyUsers } from "../helpers/users";

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
      return warzoneDataMapper(data, user);
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
