import React, { Component } from 'react'
import Profile from './Profile'

export default class DemoPureComponent extends Component {

    state = {
        like: { soLuong: 0 } //Là object không phải dữ liệu nguyên thủy
    }
    //Không được lạm dụng pure component
    likeImage = () => {
        let likeHienTai = this.state.like;
        likeHienTai.soLuong += 1;
        this.setState({
            like: {...likeHienTai}
        })
    }

    render() {
        return (
            <div className="container">
                <h3 className="text-center">Profile Lê Thị A</h3>
                <Profile like={this.state.like} />
                <br />
                <div className="card text-white bg-default">
                    <h3 style={{ color: 'red' }}>Số lượt thả tim ({this.state.like.soLuong})</h3>
                    <div className="card-body">
                        <button className="btn" style={{ color: 'red', border: '3px solid red' }} onClick={() => {
                            this.likeImage()
                        }}>Thả tim <i className="fa fa-heart"></i></button>
                    </div>
                </div>

            </div>
        )
    }
}
