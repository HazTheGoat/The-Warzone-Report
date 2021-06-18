import Card from "../components/card";
import Image from "next/image";
import { getRank, getBadges } from "../helpers/helpers";
import { User } from "../types/types";
import ScrollInformation from "./ScrollInformation";

const LifetimeContainer = ({ users }: any) => {
  return (
    <div className="d-flex justify-content-start align-items-center ">
      <ScrollInformation></ScrollInformation>

      {users.map((user: User, i: number) => (
        <Card key={i} user={user} />
      ))}
    </div>
  );
};

export default LifetimeContainer;
