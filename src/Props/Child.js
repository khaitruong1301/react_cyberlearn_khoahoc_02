import React, { Component } from 'react'

export default class Child extends Component {
    render() {
        return (
            <div>
                <img style={{width:50}} src={this.props.propSource}/>
                <div  style={{width:225}}  className="card text-left">
                    <img className="card-img-top" src={this.props.propSource} alt={this.props.propSource} />
                    <div className="card-body">
                        <h4 className="card-title">{this.props.name}</h4>
                        <p className="card-text">Body</p>
                    </div>
                </div>

            </div>
        )
    }
}
