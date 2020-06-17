import {combineReducers} from 'redux';

import BaiTapGioHangReducer from '../redux/BaiTapGioHangReducer'
import BaiTapGameXucXacReducer from './BaiTapXucXacReducer';
import BaiTapOanTuXiReducer from  './BaiTapOanTuXiReducer'
const rootReducer = combineReducers({ //store tổng của ứng dụng
    stateGioHang: BaiTapGioHangReducer, //state giỏ hàng
    BaiTapGameXucXacReducer, //state BaiTapGame
    BaiTapOanTuXiReducer //state bài tập oan tu xì
})

export default rootReducer;