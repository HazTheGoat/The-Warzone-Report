import Card from "./card";
import { User } from "../types/types";
import ScrollInformation from "./ScrollInformation";

const WeeklyContainer = ({ users }: any) => {
  return (
    <div className="d-flex justify-content-start align-items-center ">
      <ScrollInformation periodText="Weekly"></ScrollInformation>

      {users.map((user: User, i: number) => (
        <div key={i}>
          <Card user={user} />
        </div>
      ))}
    </div>
  );
};

export default WeeklyContainer;
