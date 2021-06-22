const BackSideCard = ({ user, clickHandler }: any) => {
  return (
    <div className={`apex-card ${user.rank}`} onClick={clickHandler}>
      <div className="backside-header">UNDER THE HOOD</div>
      <div className="backside-card-body">
        <div className="back-left-stats">
          {user.data.weeklyHeadshotPercentage ? (
            <div className="stats-box">
              <div>
                {(user.data.weeklyHeadshotPercentage * 100).toFixed(1)}%
              </div>
              <div>Headshot</div>
            </div>
          ) : null}
          {user.data.weeklyDamageTaken ? (
            <div className="stats-box">
              <div>
                {(
                  user.data.weeklyDamageTaken / user.data.weeklyMatchesPlayed
                ).toFixed(0)}
              </div>
              <div>Damage taken</div>
            </div>
          ) : null}

          {user.data.weeklyAssists ? (
            <div className="stats-box">
              <div>{user.data.weeklyAssists}</div>
              <div>Assist</div>
            </div>
          ) : null}
        </div>
        <div className="back-right-stats">
          {user.data.weeklyAvgLifeTime ? (
            <div className="stats-box">
              <div> {(user.data.weeklyAvgLifeTime / 60).toFixed(2)} </div>
              <div>Avg.lifetime</div>
            </div>
          ) : null}
          {user.data.weeklyAvgLifeTime ? (
            <div className="stats-box">
              <div>{user.data.weeklyWallbangs ?? 0}</div>
              <div>Wallbangs</div>
            </div>
          ) : null}
          {user.data.weeklyKills ? (
            <div className="stats-box">
              <div>{user.data.weeklyKills}</div>
              <div>Kills</div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default BackSideCard;
