import React, { Component } from 'react'
import { ModelContext } from './_Context/ModelContext'

export default class ModelProfile extends Component {
    render() {
        return (
            <ModelContext.Consumer>
                {(value) => {
                    return <div className="mt-5">
                        <h3>Profile</h3>
                        <div className="card text-white bg-dark" style={{ width: 300 }}>
                            <img className="card-img-top" src="https://2sao.vietnamnetjsc.vn/images/2020/03/14/12/30/hot-girl-1.jpg" alt="123" />
                            <div className="card-body">
                                <h4 className="card-title">Tên: Lung Thị Linh</h4>
                                <p className="card-text">Tuổi: 18</p>
                                <span style={{ color: 'pink' }}> {value.stateLike} <i className="fa fa-heart"></i></span>
                            </div>
                        </div>
                    </div>
                }}
            </ModelContext.Consumer>
        )
    }
}
