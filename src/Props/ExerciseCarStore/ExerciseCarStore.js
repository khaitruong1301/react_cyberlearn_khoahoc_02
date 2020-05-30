import React, { Component } from 'react'
import Modal from './Modal'
import ProductList from './ProductList'

export default class ExerciseCarStore extends Component {

    state = {
        productDetail: { id: 2, name: 'red car', img: './img/products/red-car.jpg', price: 2000 }
    }



    products = [
        { id: 1, name: 'black car', img: './img/products/black-car.jpg', price: 1000 },
        { id: 2, name: 'red car', img: './img/products/red-car.jpg', price: 2000 },
        { id: 3, name: 'silver car', img: './img/products/silver-car.jpg', price: 3000 },
        { id: 3, name: 'Steel car', img: './img/products/steel-car.jpg', price: 4000 }
    ];

    xemChiTiet = (newProduct) => {
        this.setState({
            productDetail:newProduct
        })
    }


    render() {
        return (
            <div>
                <h3 className="display-4 text-center">Danh sách xe</h3>
                <ProductList productsData={this.products} xemChiTiet={this.xemChiTiet}/>
                <Modal content={this.state.productDetail} />
            </div>
        )
    }
}
