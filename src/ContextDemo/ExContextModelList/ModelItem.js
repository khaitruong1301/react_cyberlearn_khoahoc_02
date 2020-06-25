import React, { Component } from 'react'
import { ExModelListContext } from '../_Context/ExModelListContext';

export default class ModelItem extends Component {
    render() {
        let { modelItem } = this.props;
        return (
            <ExModelListContext.Consumer>
                {(value) => {
                    return <div>
                        <div className="card text-white bg-default text-dark">
                            <img className="card-img-top" src={modelItem.img} alt={modelItem.img} />
                            <div className="card-body">
                                <h4 className="card-title">Họ Tên: {modelItem.name}</h4>
                                <p className="card-text">Tuổi: {modelItem.age}</p>
                                <button onClick={()=>{
                                    value.setActiveModel(modelItem.id);
                                }} style={{ background: 'none', border: '1px solid red', borderRadius: '5px' }} className="card-text"> {modelItem.like} <i style={{ color: 'red' }} className="fa fa-heart"></i></button>

                            </div>
                        </div>

                    </div>
                }}

            </ExModelListContext.Consumer>
        )
    }
}
