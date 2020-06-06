import React, { Component } from 'react'
import ExerciseCarStore from './Props/ExerciseCarStore/ExerciseCarStore'
import DemoProps from './Props/DemoProps'
import DanhSachSanPham from './Props/DanhSachSanPham'
import ExerciseCart from './Props/ExerciseCart/ExerciseCart'


export default class App extends Component {
  render() {
    return (
      <div>
        {/* <ExerciseCarStore /> */}
        {/* <DemoProps /> */}
        <ExerciseCart />
      </div>

    )
  }
}
