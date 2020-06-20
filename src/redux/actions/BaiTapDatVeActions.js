import { DAT_GHE, HUY_GHE } from "../types/BaiTapDatVeType"




export const  datGheAction = (ghe) => {

  return  {
        type:DAT_GHE,
        ghe
    }
}

export const huyGheAction = (soGhe) => {
    return {
        type:HUY_GHE,
        soGhe
    }
}