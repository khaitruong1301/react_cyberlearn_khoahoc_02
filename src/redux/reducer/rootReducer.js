import {combineReducers} from 'redux';

import BaiTapGioHangReducer from './BaiTapGioHangReducer'
import BaiTapGameXucXacReducer from './BaiTapXucXacReducer';
import BaiTapOanTuXiReducer from  './BaiTapOanTuXiReducer'
import BaiTapDatVeReducer from './BaiTapDatVeReducer';
const rootReducer = combineReducers({ //store tổng của ứng dụng
    stateGioHang: BaiTapGioHangReducer, //state giỏ hàng
    BaiTapGameXucXacReducer, //state BaiTapGame
    BaiTapOanTuXiReducer, //state bài tập oan tu xì
    BaiTapDatVeReducer//state bài tập đặt vé
})

export default rootReducer;