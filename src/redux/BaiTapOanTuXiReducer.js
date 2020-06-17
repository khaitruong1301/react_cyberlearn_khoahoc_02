

const stateDefault = {
    mangDatCuoc: [
        { ma: 'keo', hinhAnh: './img/gameOanTuXi/keo.png', datCuoc: false },
        { ma: 'bua', hinhAnh: './img/gameOanTuXi/bua.png', datCuoc: false },
        { ma: 'bao', hinhAnh: './img/gameOanTuXi/bao.png', datCuoc: true },
    ],
    ketQua: "I'm iron man, i love you 3000 !!!",
    soBanThang: 0,
    soBanChoi: 0,
    computer: { ma: 'bao', hinhAnh: './img/gameOanTuXi/bao.png' },
}


const BaiTapOanTuXiReducer = (state = stateDefault, action) => {

    switch (action.type) {

        case 'CHON_KEO_BUA_BAO': {
            //Reset mảng cược
            let mangCuocUpdate = [...state.mangDatCuoc];
            //Tạo ra mảng cược mới từ mảng cược cũ và action.maCuoc do người dùng truyền lên
            mangCuocUpdate = mangCuocUpdate.map((item,index)=>{
                if(item.ma === action.maCuoc){
                    return {...item,datCuoc:true}
                }
                return {...item,datCuoc:false}
            })
            state.mangDatCuoc = mangCuocUpdate;
            return {...state}
        }
        case 'RAN_DOM':{
            
            let soNgauNhien = Math.floor(Math.random() * 3);
            let quanCuocNgauNhien = state.mangDatCuoc[soNgauNhien];
            state.computer = {...quanCuocNgauNhien};
            return {...state}
        }
        default: return { ...state }
    }
}

export default BaiTapOanTuXiReducer;