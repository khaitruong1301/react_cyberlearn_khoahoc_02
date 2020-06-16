import React, { Component } from 'react'
import {connect} from 'react-redux';
class XucXac extends Component {

    renderXucXac = ()=> {
        //Lấy props từ reducer về
        return this.props.mangXucXac.map((xucXac,index)=>{
            return  <img key={index} className="ml-2" style={{width:50,height:50}} src={xucXac.hinhAnh} alt={xucXac.hinhAnh}/>
        })
    }
    render() {
        return (
            <div>
               {this.renderXucXac()}
            </div>
        )
    }
}


//Hàm lấy state từ redux về thành props của component
const mapStateToProps = state => {
    return {
        mangXucXac: state.BaiTapGameXucXacReducer.mangXucXac
    }
}

export default connect(mapStateToProps)(XucXac)