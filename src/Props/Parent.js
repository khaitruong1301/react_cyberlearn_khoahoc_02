import React, { Component } from 'react'
import Child from './Child'
import ChildFunctional from './ChildFunctional';

export default class Parent extends Component {



    state = { title: 'cyberlearn' }

    changeTitle = () => {
        this.setState({
            title:'Khải'
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                {/* <h3>Danh sách sản phẩm</h3>
                {this.props.children.map((com, index) => {
                    return com;
                })} */}
            </div>
        )
    }
}
