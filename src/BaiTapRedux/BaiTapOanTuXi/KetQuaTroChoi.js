import React, { Component } from 'react'

export default class KetQuaTroChoi extends Component {
    render() {
        return (
            <div>
                    <div className="display-4 text-warning">bạn thua !!!</div>
                    <div className="display-4 text-success">Số bàn thắng: <span className="text-warning">0</span></div>
                    <div className="display-4 text-success">Tổng số bàn chơi: <span className="text-warning">0</span></div>
            </div>
        )
    }
}
