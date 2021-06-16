import Image from "next/image";
import { useState } from "react";

const FrontSideCard = ( {user, clickHandler}: any)  => {

    const raiseClickHandler = () => {
        clickHandler()
    }

    return (
        <div className={`apex-card ${user.rank}`}>
            <button className="button-card" onClick={raiseClickHandler}>DETAILS</button>
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
            <div className="username">FRONT</div>
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
    )
}

export default FrontSideCard