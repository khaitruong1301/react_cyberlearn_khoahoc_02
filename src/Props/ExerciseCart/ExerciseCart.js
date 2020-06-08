import React, { Component } from 'react'
import CartModal from './CartModal'
import ProductListEXC from './ProductListEXC'

export default class ExerciseCart extends Component {

    state = {
        gioHang: []
    }

    themGioHang = (sanPham) => {
        console.log(sanPham);
        let spGioHang = {
            maSP: sanPham.maSP,
            tenSP: sanPham.tenSP,
            donGia: sanPham.giaBan,
            soLuong: 1,
            hinhAnh: sanPham.hinhAnh
        }
        //Tìm xem sản phẩm đã có trong giỏ hàng chưa

        let index = this.state.gioHang.findIndex(spGH => spGH.maSP === spGioHang.maSP);

        if (index != - 1) {
            //tìm thấy sản phẩm được click chứa trong giỏ hàng => Tăng số lượng
            this.state.gioHang[index].soLuong += 1;
        }else
        {
            //Không tìm thấy trong giỏ hàng chứa sp đó => thêm sp đó vào giỏ
            this.state.gioHang.push(spGioHang);
        }
        // let gioHangCapNhat = [...this.state.gioHang];
        this.setState({
            gioHang: this.state.gioHang
        })
    }


    render() {
        return (
            <div className="container-fluid">
                <h3 className="text-center">BÀI TẬP GIỎ HÀNG</h3>
                <div className="text-right">
                    <span style={{ width: 17, cursor: 'pointer' }} data-toggle="modal" data-target="#modelId">
                        <i className="fa fa-cart mr-5"><i class="fa fa-cart-arrow-down"></i>(0) Giỏ hàng</i>
                    </span>
                </div>
                <CartModal gioHang={this.state.gioHang} />
                <ProductListEXC themGioHang={this.themGioHang} />
            </div>
        )
    }
}
