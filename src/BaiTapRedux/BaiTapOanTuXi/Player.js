import React, { Component } from 'react'

export default class Player extends Component {
    render() {
        return (
            <div className="text-center playerGame">
                <div className="theThink">

                    <img style={{transform:'rotate(120deg)'}} className="mt-3" width={100} height={100} src="./img/gameOanTuXi/bua.png" alt="./img/gameOanTuXi/bua.png" />
                </div>
                <div className="speech-bubble"></div>
                <img style={{ width: 200, height: 200 }} src="./img/gameOanTuXi/player.png" alt="./img/gameOanTuXi/player.png" />

                <div className="row">
                    <div className="col-4">
                        <button className="btnItem">
                            <img width={50} height={50} src="./img/gameOanTuXi/bao.png" alt="./img/gameOanTuXi/bao.png" />
                        </button>
                    </div>
                    <div className="col-4">
                        <button className="btnItem">
                            <img width={50} height={50} src="./img/gameOanTuXi/bua.png" alt="./img/gameOanTuXi/bua.png" />
                        </button>
                    </div>
                    <div className="col-4">
                        <button className="btnItem">
                            <img width={50} height={50} src="./img/gameOanTuXi/keo.png" alt="./img/gameOanTuXi/keo.png" />
                        </button>
                    </div>
                </div>

            </div>
        )
    }
}
