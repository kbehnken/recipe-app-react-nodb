import React, { Component } from 'react';

import Edit from './Edit.js';

export default class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipe: {}
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.saveChanges = this.saveChanges.bind(this);
    }

    changeHandler(key, value) {
        let recipe = this.state.recipe
        recipe[key] = value
        this.setState( {
            recipe: recipe
        })
    }
    saveChanges() {
        this.props.addRecipeFn(this.state.recipe)
        this.props.setActionFn(false)
    }

    render() {
        return <Edit recipe={this.state.recipe} changeHandler={this.changeHandler} saveChangesFn={this.saveChanges} setActionFn={this.props.setActionFn} />
    }
}