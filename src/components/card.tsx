
const Card = ({user, counter}:any) => {
    console.log(user);
    
    return ( 
      <div className="card">
        <div className="card-header">
            <img src={`../avatar-pictures/avatar${counter+1}.png`} className="card-img-top" alt="..."></img>
            <div className="header-text">
                <h3>{(user.data.kdRatio).toFixed(2)}</h3>
                <p>K/D Ratio</p>
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
                    </div>
                </div>
            </div>
      </div>
     );
}
 
export default Card;

