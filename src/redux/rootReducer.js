import {combineReducers} from 'redux';

import BaiTapGioHangReducer from '../redux/BaiTapGioHangReducer'
import BaiTapGameXucXacReducer from './BaiTapXucXacReducer';

const rootReducer = combineReducers({ //store tổng của ứng dụng
    stateGioHang: BaiTapGioHangReducer, //state giỏ hàng
    BaiTapGameXucXacReducer //state BaiTapGame
})

export default rootReducer;