
const Card = () => {
    return ( 
        <div className="container">
            <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
                <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                <div className="card-body">
                    <img src="https://i.pinimg.com/originals/42/2c/07/422c077fa5ed0dd72023d126a3b11da5.png" className="card-img-top" alt="..."></img>
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                </div>
            </div>
            </div>
        </div>
     );
}
 
export default Card;