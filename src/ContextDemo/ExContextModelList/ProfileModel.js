import React, { Component } from 'react'

export default class ProfileModel extends Component {
    render() {
        return (
            <div>
                <h3>Thông tin Idol</h3>
                <div className="card text-left" style={{width:300}}>
                    <img className="card-img-top" src="./img/model/model1.png" alt="./img/model/model1.png" />
                    <div className="card-body">
                        <h4 className="card-title">Họ tên: Tào Tháo</h4>
                        <p className="card-text">Tuổi: 65</p>
                        <p className="card-text">Lượt thích: 8 <i style={{color:'red'}}  className="fa fa-heart"></i></p>
                        
                    </div>
                </div>

            </div>
        )
    }
}
