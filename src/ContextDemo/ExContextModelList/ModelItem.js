import React, { Component } from 'react'

export default class ModelItem extends Component {
    render() {
        return (
            <div>
                <div className="card text-white bg-default text-dark">
                    <img className="card-img-top" src="./img/model/model1.png" alt="./img/model/model1.png" />
                    <div className="card-body">
                        <h4 className="card-title">Họ Tên: Default</h4>
                        <p className="card-text">Tuổi: 18</p>
                        <button style={{background:'none',border:'1px solid red',borderRadius:'5px'}} className="card-text"> 8 <i style={{color:'red'}}  className="fa fa-heart"></i></button>

                    </div>
                </div>

            </div>
        )
    }
}
