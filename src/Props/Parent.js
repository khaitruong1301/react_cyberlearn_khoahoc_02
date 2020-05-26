import React, { Component } from 'react'
import Child from './Child'
import ChildFunctional from './ChildFunctional';

export default class Parent extends Component {

    product = {
        id:1,
        name:'bitis hunter x2',
        src : 'http://svcy2.myclass.vn/image/shoes2.jpg',
        desc: 'Giày Việt Nam chất lượng cao, êm ái, nâng niu đôi bàn chân !',
        price:1000,
        size:[36,37,38,39,40]
    }
    
    size = [36,37,38,39,40]

    showInfo = (name)=>{
        alert(name)
    };

    render() {
        
        
        return (
            <div>
              <input type="text" />
           

            {/* <ChildFunctional productItem={this.product}/> */}
            <Child showAlert={this.showInfo} productItem={this.product} shoesSize={this.size}/>


            </div>
        )
    }
}
