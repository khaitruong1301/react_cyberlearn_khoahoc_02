import React, { Component } from 'react'

export default class Computer extends Component {
    render() {
        return (
            <div className="text-center playerGame">
                <div className="theThink">
                    <img style={{transform:'rotate(120deg)'}} className="mt-3" width={100} height={100} src="./img/gameOanTuXi/bua.png" alt="./img/gameOanTuXi/bua.png" />
                </div>
                <div className="speech-bubble"></div>
                <img style={{ width: 200, height: 200 }} src="./img/gameOanTuXi/playerComputer.png" alt="./img/gameOanTuXi/playerComputer.png" />


            </div>
        )
    }
}
