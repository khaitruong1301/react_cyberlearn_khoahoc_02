

const stateDefault = {
    taiXiu:true, //True: là tài (từ 3->11), false là xỉu (12<)
    mangXucXac: [
        {ma:6,hinhAnh:'./img/gameXucXac/6.png'},
        {ma:6,hinhAnh:'./img/gameXucXac/6.png'},
        {ma:6,hinhAnh:'./img/gameXucXac/6.png'}
    ],
    soBanThang:0,
    tongSoBanChoi:0
}



const BaiTapGameXucXacReducer = (state=stateDefault,action)=>{
    switch(action.type)
    {
        default : return {...state}
    }
}

export default BaiTapGameXucXacReducer;