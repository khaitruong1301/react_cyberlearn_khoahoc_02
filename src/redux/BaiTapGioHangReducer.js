
//setup State giỏ hàng trên store

const stateGioHang = {
    gioHang: []
}




const BaiTapGioHangReducer = (state = stateGioHang, action) => {

    switch (action.type) {
        case 'THEM_GIO_HANG': {
            let index = state.gioHang.findIndex(spGH => spGH.maSP === action.spGioHang.maSP);

            if (index !== -1) {
                state.gioHang[index].soLuong += 1;
            } else {
                state.gioHang.push(action.spGioHang)
            }
            //Cập nhật lại state.gioHang
            state.gioHang = [...state.gioHang];
            // console.log('gioHang',state.gioHang)
            return {...state};
        };break;
        case 'XOA_GIO_HANG' : {
            let gioHangCapNhat = [...state.gioHang];
            
            //Tìm ra phần tử cần xóa dựa vào maSP
            let index = gioHangCapNhat.findIndex(spGH=> spGH.maSP===action.maSP);
            if(index !== -1)
            {
                gioHangCapNhat.splice(index,1);
            }
            //Cập nhật lại state giỏ hàng mới để component render lại
            state.gioHang = gioHangCapNhat;
            return {...state}
        };break;
        default : return {...state};
    }
   
}

export default BaiTapGioHangReducer;