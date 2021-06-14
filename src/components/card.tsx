import Image from "next/image";

const Card = ({ user, counter }: any) => {
  console.log(user);
  return (
    <div className="apex-card">
      <div className="avatar">
        <Image
          width="160"
          height="250"
          layout={"fixed"}
          objectFit={"contain"}
          src={`/avatar-pictures/${user.avatar}.png`}
          alt="..."
        />
      </div>
      <div>
        <h3>{user.data.kdRatio.toFixed(2)}</h3>
        <p>K/D Ratio </p>
        {user.hasOwnProperty("positiveWeeklyKD") ? (
          <p>K/D arrow {user.positiveWeeklyKD ? "Up" : "Down"}</p>
        ) : null}
      </div>
      <h5>{user.username}</h5>
      <h5>{user.rank}</h5>
      <div>
        <p>{user.data.wins}</p>
        <p>Wins</p>
      </div>
      <div>
        <p>{user.data.topFive}</p>
        <p>Top Five</p>
      </div>
      <div>
        <p>{user.data.gamesPlayed}</p>
        <p>Games</p>
      </div>
      <div>
        <p> {(user.data.accuracy * 100).toFixed(2)}%</p>
        <p>Accuracy</p>
      </div>
      {user.data.gulagKills ? (
        <div>
          <p> {user.data.gulagKills}</p>
          <p>Gulag</p>
        </div>
      ) : null}
    </div>
  );
};

export default Card;
