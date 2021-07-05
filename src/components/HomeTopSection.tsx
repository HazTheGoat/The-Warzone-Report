import HomeCard from "./HomeCard";
import { User } from "../types/types";
import { useState } from "react";
import { Button } from "@material-ui/core";

const HomeTopSection = () => {
  const [users, setUsers] = useState<User[]>([]);

  return (
    <div className="top-section-content">
      <div className="top-text-section">
        <div className="top-text-header">
          <span>
            CREATE YOUR VERY OWN BOARD EXLUSIVELY WITH YOU AND YOUR FRIENDS
          </span>
        </div>
        <div className="top-text-box ">
          <span>COMPARE STATS SUCH AS</span>
          <span>KD:RATIO - DAMAGE - WINS</span>
        </div>
        <div className="top-text-box">
          <span>
            CHOOSE BETWEEN A WIDE VARIETY OF CARDS & CUSTOMIZE YOUR BADGES
          </span>
        </div>
        <div className="top-text-box">
          <span>
            CHOOSE BETWEEN A WIDE VARIETY OF CARDS & CUSTOMIZE YOUR BADGES
          </span>
        </div>
        <Button variant="contained" color="secondary">
          Try for free
        </Button>
      </div>

      <div className="top-card-section">
        {users.map((user: User) => (
          <div key={user.username}>
            <HomeCard user={user} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeTopSection;
