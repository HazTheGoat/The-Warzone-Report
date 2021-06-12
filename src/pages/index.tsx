import { useEffect, useState } from "react";
import { users } from "../constants/username";
import { getProfile } from "../services/warzone";

export default function Home() {
  const [profiles, setProfiles] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      users.forEach((user) => {
        getProfile({
          username: user.username.replace("#", "%23"),
          platform: user.platform,
        }).then((response) => {
          setProfiles((prevState) => {
            return [...prevState, response];
          });
        });
      });
    };

    fetchData();
  }, []);

  return <h1>Apex sstats</h1>;
}
