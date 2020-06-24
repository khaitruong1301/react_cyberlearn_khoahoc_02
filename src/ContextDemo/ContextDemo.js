import React, { Component } from 'react'
import ModelProfile from './ModelProfile'
import LikeProfile from './LikeProfile'
import { ModelContext } from './_Context/ModelContext'
import ModelStateProvider from './_Provider/ModelStateProvider'

export default class ContextDemo extends Component {
    render() {
        return (
            <ModelStateProvider>
                <div className="container">
                    <ModelProfile />
                    <LikeProfile />
                </div>
            </ModelStateProvider>
            
        )
    }
}
