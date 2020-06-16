import React, { Component } from 'react'
import { connect } from 'react-redux';
class ThongTinTroChoi extends Component {
    render() {
        return (
            <div>
                <div className="display-4">BẠN CHỌN: <span className="text-danger">{this.props.taiXiu ? 'TÀI' : 'XỈU'}</span></div>
                <div className="display-4">BÀN THẮNG: <span className="text-success"> {this.props.soBanThang}</span></div>
                <div className="display-4">TỔNG SỐ BÀN CHƠI: <span className="text-primary"> {this.props.tongSoBanChoi}</span></div>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        soBanThang: state.BaiTapGameXucXacReducer.soBanThang,
        taiXiu: state.BaiTapGameXucXacReducer.taiXiu,
        tongSoBanChoi: state.BaiTapGameXucXacReducer.tongSoBanChoi
    }
}


export default connect(mapStateToProps)(ThongTinTroChoi)