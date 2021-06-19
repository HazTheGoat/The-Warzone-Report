import { useEffect, useState } from "react";
import ReactCardFlip from "react-card-flip";
import FrontSideCard from "./FrontSideCard";
import BackSideCard from "./BackSideCard";

const Card = ({ user, timeout }: any) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsFlipped(false);
    }, timeout);
  }, []);

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
