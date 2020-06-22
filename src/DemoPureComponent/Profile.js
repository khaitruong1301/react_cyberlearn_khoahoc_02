import React, { Component, PureComponent } from 'react'

export default class Profile extends PureComponent {


    render() {
       console.log('load')
        return (
            <div className="card text-white bg-dark" style={{width:250}}>
                <img style={{width:250,height:300}} className="card-img-top" src="https://cdn.pose.com.vn/assets/2019/08/27/6625837813537884714440914756382156664602624o-1566876775503776987849.jpg" alt="123" />
                <div className="card-body">
        <h3>Số lượng tim: <i className="fa fa-heart"></i> {this.props.like.soLuong}</h3>
                    <h4 className="card-title">Họ tên: Lê Thị A</h4>
                    <p className="card-text">Tuổi: 18</p>
                </div>
            </div>
        )
    }
}
