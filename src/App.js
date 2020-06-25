import React, { Component } from 'react'
import ExerciseCarStore from './Props/ExerciseCarStore/ExerciseCarStore'
import DemoProps from './Props/DemoProps'
import DanhSachSanPham from './Props/DanhSachSanPham'
import ExerciseCart from './Props/ExerciseCart/ExerciseCart'
import BaiTapGioHangRedux from './BaiTapGioHangRedux/BaiTapGioHangRedux'
import BaiTapGameXucXac from './BaiTapRedux/BaiTapGameXucXac'
import BaiTapOanTuXi from './BaiTapRedux/BaiTapOanTuXi/BaiTapOanTuXi'
import BaiTapBookingTicket from './BaiTapRedux/BaiTapBookingTicket/BaiTapBookingTicket'
import DemoPureComponent from './DemoPureComponent/DemoPureComponent'
import ContextDemo from './ContextDemo/ContextDemo'
import ExContextModelList from './ContextDemo/ExContextModelList/ExContextModelList'


export default class App extends Component {
  render() {
    return (
      <div>
        {/* <ExerciseCarStore /> */}
        {/* <DemoProps /> */}
        {/* <ExerciseCart /> */}
        {/* <BaiTapGioHangRedux /> */}
        {/* <BaiTapGameXucXac /> */}
        {/* <BaiTapOanTuXi /> */}
        {/* <BaiTapBookingTicket /> */}
        {/* <DemoPureComponent /> */}
        {/* <ContextDemo /> */}
        <ExContextModelList />
      </div>

    )
  }
}
