import React, { Component } from 'react'
import Parent from './Parent'
import DanhSachSanPham from './DanhSachSanPham'

export default class DemoProps extends Component {

    refParent = React.createRef();


    changeTitle = () => {
        this.refParent.current.changeTitle();
    }

    render() {



        return (
            <div>
                <button onClick={this.changeTitle}>Change title</button>
                <Parent ref={this.refParent}>
                    <DanhSachSanPham />
                    <h3>hello cyberlearn</h3>
                    <DanhSachSanPham />
                    <DanhSachSanPham />
                </Parent>
            </div>
        )
    }
}
