

function Card(props){


    return(
        <div className="card-body">
            <div className="card-image">
                <img src={props.image} alt="product" />
            </div>
            <div className="card-desc">
                <span className="card-title">{props.name}</span>
                <span className="price">{props.price}$</span>
            </div>
        </div>
    )


}

export default Card