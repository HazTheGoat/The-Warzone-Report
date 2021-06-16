
const BackSideCard = ({user, clickHandler}: any) => {

    const raiseClickHandler = () => {
        clickHandler()
    }

    return (
        <div className={`apex-card ${user.rank}`}> 
            <div className="backside-header">UNDER THE HOOD</div>
            <div className="backside-card-body">
                <div className="back-left-stats">
                    <div className="stats-box">
                        <div> {(user.data.weeklyHeadshotPercentage * 100).toFixed(1)}% </div> 
                        <div>Headshot </div> 
                    </div>
                    <div className="stats-box">
                        <div> {(user.data.weeklyDamageTaken / user.data.weeklyMatchesPlayed).toFixed(0)} </div> 
                        <div>Damage taken</div>
                    </div>
                    <div className="stats-box">
                    <div> DATA </div> 
                        <div>Description</div>
                    </div>
                    <div className="stats-box">
                        <div> DATA </div> 
                        <div>Description</div>
                    </div>
                </div>
                <div className="back-right-stats">
                    <div className="stats-box">
                        <div> {(user.data.weeklyAvgLifeTime / 60).toFixed(2)} </div> 
                        <div>Avg.lifetime</div>
                    </div>
                    <div className="stats-box">
                    <div>{user.data.weeklyWallbangs ?  user.data.weeklyWallbangs : 0 }</div> 
                        <div>Wallbangs </div> 
                    </div>
                    <div className="stats-box">
                        <div> DATA </div> 
                        <div>Description</div> 
                    </div>
                    <div className="stats-box">
                        <div> DATA </div> 
                        <div>Description</div> 
                    </div>
                </div>
            </div>
        <button className="button-card" onClick={raiseClickHandler}>RETURN</button>
        </div>
    )
}


export default BackSideCard