import Image from "next/image"

const Card = ({user, counter}:any) => {
    console.log("test", user);
    
    return ( 
      <div className="card">
        <div className="card-header">
            <Image width="90" height="120" src={`/avatar-pictures/${user.avatar}.png`} className="card-Image-top" alt="..."/>
            <div className="header-text">
                <h3>{(user.data.kdRatio).toFixed(2)}</h3>
                <p>K/D Ratio </p>
                {
                  user.hasOwnProperty("positiveWeeklyKD") ? 
                  <p>K/D arrow {user.positiveWeeklyKD ? "Up" : "Down"}</p> : null
                  }
            </div>
            <h5 className="card-title">{user.username}</h5>
        </div>
            <div className="card-body">
                <div className="card-stats-body">
                    <div className="inner-stats-body">
                      <div className="text-box">
                        <p>{(user.data.wins)}</p>
                        <p className="text-muted">Wins</p>
                      </div>
                      <div className="text-box">
                        <p>{(user.data.topFive)}</p>
                        <p className="text-muted">Top Five</p>
                      </div>
                    </div>
                    <div className="inner-stats-body">
                      <div className="text-box">
                      <p>{(user.data.gamesPlayed)}</p>
                      <p className="text-muted">Games</p>
                      </div>
                      <div className="text-box">
                        <p> {((user.data.accuracy) *100).toFixed(2)}%</p>
                        <p className="text-muted">Accuracy</p>
                      </div>
                      { (user.data.gulagKills ? <div className="text-box">
                        <p> {(user.data.gulagKills)}</p>
                        <p className="text-muted">Gulag</p>
                      </div> : null) 
                      }
                    </div>
                </div>
            </div>
      </div>
     );
}
 
export default Card;

