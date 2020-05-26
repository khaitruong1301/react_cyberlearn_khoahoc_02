import React from 'react'

export default function ChildFunctional(props) {

    let {src,name,price} = props.productItem;


    return (
     
            <div>
                <img style={{width:50}} src={src}/>
                <div  style={{width:225}}  className="card text-left">
                    <img className="card-img-top" src={src} alt={src} />
                    <div className="card-body">
                        <h4 className="card-title">{name}</h4>
                        <p className="card-text">{price}</p>
                    </div>
                </div>

            </div>
      
    )
}
