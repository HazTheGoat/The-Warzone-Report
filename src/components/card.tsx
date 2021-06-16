import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import FrontSideCard from "./FrontSideCard";
import BackSideCard from "./BackSideCard";

const Card = ({ user }: any) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const cardFlipHandler = () => {
    setIsFlipped((prevState) => !isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <FrontSideCard user={user} clickHandler={cardFlipHandler} />
      <BackSideCard user={user} clickHandler={cardFlipHandler} />
    </ReactCardFlip>
  );
};

export default Card;
