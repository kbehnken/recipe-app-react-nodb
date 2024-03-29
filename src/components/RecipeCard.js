import React, { Component } from "react";

import Edit from './Edit';
import Read from './Read';

export default class RecipeCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            recipe: props.recipe
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.setEditing = this.setEditing.bind(this);
        this.saveChanges = this.saveChanges.bind(this);
    }

    changeHandler(key, value) {
        let recipe = this.state.recipe
        recipe[key] = value
        this.setState( {
            recipe: recipe
        })
    }
    setEditing(status) {
        this.setState( {
            editing: status
        })
    }
    saveChanges() {
        this.props.editRecipeFn(this.state.recipe.id, this.state.recipe)
        this.setEditing(false)
    }

    render() {
        const {editing, recipe} = this.state;
        return (
            <div>
                {
                    editing
                    ?
                    <Edit recipe={recipe} changeHandler={this.changeHandler} saveChangesFn={this.saveChanges} setActionFn={() => {
                        this.setEditing(false)
                    }} />
                    :
                    <Read recipe={recipe} discardRecipeFn={this.props.discardRecipeFn} setActionFn={() => {
                        this.setEditing(true)
                    }} />
                }
            </div>   
        )
    }
}