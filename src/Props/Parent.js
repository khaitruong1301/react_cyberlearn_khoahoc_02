import React, { Component } from 'react'
import Child from './Child'
import ChildFunctional from './ChildFunctional';

export default class Parent extends Component {

    src = "http://svcy2.myclass.vn/image/shoes2.jpg";
    name='bitis hunter x2'

    render() {
        return (
            <div>
              <input type="text" />
              {/* <Child propSource={this.src} name={this.name}/>
              <Child propSource={'http://svcy2.myclass.vn/image/shoes3.jpg'} name={'bitis hunter x5'}/>
              <Child propSource={'http://svcy2.myclass.vn/image/shoes5.jpg'} name={'bitis hunter x7'}/> */}

            <ChildFunctional propSource={this.src} name={this.name}/>


            </div>
        )
    }
}
