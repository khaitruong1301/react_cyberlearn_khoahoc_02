import React, { Component } from 'react'
import ModelItem from './ModelItem'
import ExContextModelList from './ExContextModelList'
import { ExModelListContext } from '../_Context/ExModelListContext'

export default class ModelList extends Component {



    render() {
        console.log("modelList")
        return (
            <ExModelListContext.Consumer>
                {(value) => {
                    console.log(value)
                    return <div>
                        <h3>Danh sách idol</h3>
                        <div className="row">
                            {value.modelListState.map((model,index)=>{
                                return <div className="col-3" key={index}>
                                    <ModelItem modelItem = {model} />
                                </div>
                            })}
                        </div>
                    </div>
                }}

            </ExModelListContext.Consumer>
        )
    }
}
