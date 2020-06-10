import React, { Component } from 'react'

//Sử dụng thư viên connect để lấy dữ liệu từ store về
import {connect} from 'react-redux'
class GioHangRedux extends Component {
    render() {
        console.log(this.props.gioHang)

        return (
            <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content" style={{minWidth:800}}>
                        <div className="modal-header">
                            <h5 className="modal-title">Giỏ hàng</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Mã sp</th>
                                        <th>Hình ảnh</th>
                                        <th>Tên sản phẩm</th>
                                        <th>Giá</th>
                                        <th>Số lượng</th>
                                        <th>Thành tiền</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.props.gioHang.map((spGH,index)=>{
                                        return <tr key={index}>
                                            <td>{spGH.maSP}</td>
                                            <td><img src={spGH.hinhAnh} alt={spGH.hinhAnh} width={50} height={50} /></td>
                                            <td>{spGH.tenSP}</td>
                                            <td>{spGH.gia.toLocaleString()}</td>
                                            <td>{spGH.soLuong.toLocaleString()}</td>
                                            <td>{(spGH.soLuong * spGH.gia).toLocaleString()}</td>
                                            <td></td>
                                        </tr>
                                    })}
                                </tbody>
                            </table>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

//Hàm lấy state redux biến đổi thành props của component
const mapStateToProps = state => { //state là state tổng của ứng dụng chứa các state con (rootReducer)
    return {
        gioHang: state.stateGioHang.gioHang
    }
}

export default connect(mapStateToProps)(GioHangRedux)