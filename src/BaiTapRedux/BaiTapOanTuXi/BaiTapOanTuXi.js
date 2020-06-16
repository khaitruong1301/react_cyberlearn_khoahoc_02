import React, { Component } from 'react'
import './BaiTapOanTuXi.css'
import Player from './Player'
import Computer from './Computer'
import ThongTinTroChoi from '../ThongTinTroChoi'
import KetQuaTroChoi from './KetQuaTroChoi'
export default class BaiTapOanTuXi extends Component {
    render() {
        return (
            <div className="gameOanTuXi">
                <div className="row text-center mt-5">
                    <div className="col-4 mt-3">
                        <Player />
                    </div>
                    <div className="col-4 mt-3">
                        <KetQuaTroChoi />
                        <button className="btn btn-success p-2 display-4 mt-5" >Play game</button>
                    </div>
                    <div className="col-4 mt-3">
                        <Computer />
                    </div>
                </div>
            </div>
        )
    }
}
