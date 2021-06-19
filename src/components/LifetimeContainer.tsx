import Card from "./card";
import { User } from "../types/types";
import ScrollInformation from "./ScrollInformation";

const LifetimeContainer = ({ users }: any) => {
  const getTimeout = (index: number) => {
    return (index + 1) * 100;
  };
  return (
    <div className="d-flex justify-content-start align-items-center ">
      <ScrollInformation periodText="Lifetime"></ScrollInformation>

      {users.map((user: User, index: number) => (
        <div key={index}>
          <Card user={user} timeout={getTimeout(index)} />
        </div>
      ))}
    </div>
  );
};

export default LifetimeContainer;
