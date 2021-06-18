import Card from "./card";
import { User } from "../types/types";
import ScrollInformation from "./ScrollInformation";

const LifetimeContainer = ({ users }: any) => {
  return (
    <div className="d-flex justify-content-start align-items-center ">
      <ScrollInformation periodText="Lifetime"></ScrollInformation>

      {users.map((user: User, i: number) => (
        <div key={i}>
          <Card user={user} />
        </div>
      ))}
    </div>
  );
};

export default LifetimeContainer;
