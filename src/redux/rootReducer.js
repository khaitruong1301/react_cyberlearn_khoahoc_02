import {combineReducers} from 'redux';

import BaiTapGioHangReducer from '../redux/BaiTapGioHangReducer'

const rootReducer = combineReducers({ //store tổng của ứng dụng
    stateGioHang: BaiTapGioHangReducer //state giỏ hàng
})

export default rootReducer;