import React, { Component } from 'react'

export default class ProductItemEXC extends Component {
    render() {
        let {sanPhamProps} = this.props;

        return (
            <div classname="card text-center">
                <img classname="card-img-hitop" src={sanPhamProps.hinhAnh} alt={sanPhamProps.hinhAnh} style={{width:300,height:300}}/>
                <div classname="card-body text-center">
                    <h4 classname="card-title">{sanPhamProps.tenSP}</h4>
                    <p classname="card-text">{sanPhamProps.giaBan}</p>
                    <button className="btn btn-success" onClick={()=>{}}>Thêm giỏ hàng</button>
                </div>
            </div>

        )
    }
}
