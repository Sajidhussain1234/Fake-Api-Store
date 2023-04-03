import React from 'react'

const Card = (props) => {
    const {title, description, price, image, category, rating} = props.product;
    return (
        <div>
            <div className="card" style={{width: '18rem'}}>
                <img src={image} className="card-img-top" alt={title} height='220vh' />
                <hr />
                <div className="card-body">
                    <h5 className="card-title">{title?.slice(0,15)}</h5>
                    <p className="card-text">{description?.slice(0, 42)}...</p>
                    <h5>{category}</h5>
                    <p className='d-flex justify-content-between'><strong>cout: {rating.count}</strong>  <strong>rate: {rating.rate}</strong> </p>
                    <hr />
                    <div className='d-flex justify-content-between'>
                        <h4>Price: {price}$</h4>
                        <a href="/" className="btn btn-primary">Submit</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card