import { useEffect, useState } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import { mappedLifetimeUser, mappedWeeklyUser, User } from "../types/types";
import { usersToFetch } from "../constants/username";
import PageHeader from "../components/Header";
import WeeklyContainer from "../components/WeeklyContainer";
import LifetimeContainer from "../components/LifetimeContainer";
import { warzoneDataMapper } from "../api/warzone-data-mapper";
import { weeklyDataMapper, lifetimeDataMapper } from "../helpers/users";

const Home = ({ fetchedUsers }: any) => {
  const [users, setUsers] = useState<User[]>([]);
  const [hideJosef, setHideJosef] = useState<boolean>(false);
  const [weeklyUser, setWeeklyUser] = useState<mappedWeeklyUser[]>([]);
  const [lifetimeUser, setLifetimeUser] = useState<mappedLifetimeUser[]>([]);

  useEffect(() => {
    setUsers(JSON.parse(fetchedUsers));
  }, []);

  useEffect(() => {
    const mappedWeeklyUsers = weeklyDataMapper(users);
    const mappedLifetimeUsers = lifetimeDataMapper(users);
    setWeeklyUser(mappedWeeklyUsers);
    setLifetimeUser(mappedLifetimeUsers);
  }, [users]);

  useEffect(() => {
    const usersWithoutJosef = [...users].filter((x) => x.username !== "Josef");
    const mappedWeeklyUsers = weeklyDataMapper(
      hideJosef ? usersWithoutJosef : users
    );
    // const mappedLifetimeUsers = lifetimeDataMapper(
    //   hideJosef ? usersWithoutJosef : users
    // );
    setWeeklyUser(mappedWeeklyUsers);
    // setLifetimeUser(mappedLifetimeUsers);
  }, [hideJosef]);

  const hideJosefHandler = () => {
    setHideJosef((prevState) => !prevState);
  };

  return (
    <>
      <PageHeader
        clickHandler={hideJosefHandler}
        hideJosef={hideJosef}
      ></PageHeader>
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
