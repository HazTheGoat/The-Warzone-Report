import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import FrontSideCard from "./FrontSideCard";
import BackSideCard from "./BackSideCard";

const Card = ({ user }: any) => {
  //   console.table({ username: user.username, badges: user.badges });
  const [isFlipped, setIsFlipped] = useState(false);

  const cardFlipHandler = () => {
    setIsFlipped((prevState) => !prevState);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <FrontSideCard
        isFlipped={isFlipped}
        user={user}
        clickHandler={cardFlipHandler}
      />
      <BackSideCard user={user} clickHandler={cardFlipHandler} />
    </ReactCardFlip>
  );
};

export default Card;
