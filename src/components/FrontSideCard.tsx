import Image from "next/image";
import { useState } from "react";
import Tooltip from "@material-ui/core/Tooltip";
import withStyles from "@material-ui/styles/withStyles";

const FrontSideCard = ({ user, clickHandler }: any) => {
  console.log("USER: ", user.badges);
  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case "SHIELD":
        return "blue";

      case "TRAVELER":
        return "green";

      case "DEADEYE":
        return "yellow";

      case "PITBULL":
        return "red";

      case "MARTYR":
        return "white";
    }
  };

  const getTooltip = (badge: string) => {
    if (badge === "SHIELD") {
      return "This fucker is a beast! He is our bulletspunge. He has the most damage taken this week!";
    }
    if (badge === "TRAVELER") {
      return "Enjoys long walks on the beach. Has explored all of Verdansk! This lad has covered most distances this week!";
    }
    if (badge === "DEADEYE") {
      return "The enemy fears him. No one dares run in the open. Legend says henever misses a headshot!";
    }
    if (badge === "PITBULL") {
      return "          He does not shy away from battle, he thrives in it. You can not escape his punishment. He has the most damage done this week!";
    }
    if (badge === "MARTYR") {
      return "The good guy. The Canadian. Like Jesus he sacrifices himself for the squad. He has the most deaths this week.";
    }
    return "";
  };

  const HtmlTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: "rgba(0,0,0,0.7)",
      color: "#fff",
      maxWidth: 350,
      fontSize: 18,
      padding: 15,
    },
  }))(Tooltip);

  return (
    <div className={`apex-card ${user.rank}`} onClick={clickHandler}>
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
      <div className={`${!user.data.weeklyDamageDone ? "lifetime" : ""} kd`}>
        <h1>
          {user.data.weeklyKdRatio?.toFixed(2) ||
            user.data.lifetimeKdRatio?.toFixed(2)}
        </h1>
        <div className="kd-text">K/D</div>
      </div>

      {user.badges?.map((badge: string) => {
        return (
          <div className="weekly-badge">
            <div className={`neon neon-${getBadgeColor(badge)}`}>
              <HtmlTooltip title={getTooltip(badge)} placement="top">
                <div>
                  {Object.assign([], badge).map(
                    (letter: string, index: number) => (
                      <span
                        key={index}
                        className={
                          index === Math.floor(Math.random() * 5)
                            ? "flicker flicker-slow"
                            : ""
                        }
                      >
                        {letter}
                      </span>
                    )
                  )}
                </div>
              </HtmlTooltip>
            </div>
          </div>
        );
      })}

      {/* {user.badges?.map((badge: string) => (
        <ReactTooltip className="tooltip" id={badge} type="dark" effect="solid">
          {badge === "SHIELD" ? (
            <span>
              This fucker is a beast! He is our bulletspunge. He has the most
              damage taken this week!
            </span>
          ) : null}
          {badge === "TRAVELER" ? (
            <span>
              Enjoys long walks on the beach. Has explored all of Verdansk! This
              lad has covered most distances this week!
            </span>
          ) : null}
          {badge === "DEADEYE" ? (
            <span>
              The enemy fears him. No one dares run in the open. Legend says he
              never misses a headshot!
            </span>
          ) : null}
          {badge === "PITBULL" ? (
            <span>
              He does not shy away from battle, he thrives in it. You can not
              escape his punishment. He has the most damage done this week!
            </span>
          ) : null}
          {badge === "MARTYR" ? (
            <span>
              The good guy. The Canadian. Like Jesus he sacrifices himself for
              the squad. He has the most deaths this week.{" "}
            </span>
          ) : null}
        </ReactTooltip>
      ))} */}

      {user.data.weeklyDamageDone ? (
        <div className="dmg-pr-game">
          <h2>
            {user.data.weeklyDamageDone
              ? (
                  user.data.weeklyDamageDone / user.data.weeklyMatchesPlayed
                ).toFixed(0)
              : null}
          </h2>
          <div className="dmg-pr-game-text">Dmg/game</div>
        </div>
      ) : null}
      <div className="username">{user.username}</div>
      <div className="rank">{user.rank}</div>
      <div className="stats left-stats">
        {user.data.wins ? (
          <div>
            <div>{user.data.wins} Wins</div>
          </div>
        ) : null}
        {user.data.gamesPlayed ? (
          <div>
            <div>{user.data.gamesPlayed} Games</div>
          </div>
        ) : null}
        {user.data.gulagKills ? (
          <div>
            <div>{user.data.gulagKills} Gulag W's</div>
          </div>
        ) : null}
        {user.data.weeklyMatchesPlayed ? (
          <div>
            <div>{user.data.weeklyMatchesPlayed} Games</div>
          </div>
        ) : null}
      </div>
      <div className="stats right-stats">
        {user.data.weeklyAccuracy || user.data.lifetimeAccuracy ? (
          <div>
            <div>
              {(
                user.data.weeklyAccuracy || user.data.lifetimeAccuracy * 100
              ).toFixed(0)}
              % Acc.
            </div>
          </div>
        ) : null}
        {user.data.topFive ? <div>{user.data.topFive} Top 5</div> : null}
        {user.data.weeklyKillsPerGame ? (
          <div>{user.data.weeklyKillsPerGame.toFixed(0)} Kills/game</div>
        ) : null}
      </div>
    </div>
  );
};

export default FrontSideCard;
