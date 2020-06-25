import React, { Component } from 'react'
import ProfileModel from './ProfileModel'
import ModelList from './ModelList'

export default class ExContextModelList extends Component {
    render() {
        return (
            <div className="container">
                <ProfileModel />
                <ModelList />
            </div>
        )
    }
}
