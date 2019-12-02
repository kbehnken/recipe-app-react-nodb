import React, { Component } from 'react';
import RecipeForm from './Edit';
import RecipeCard from './RecipeCard';

export default class Recipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            prepTime: props.prepTime,
            cookTime: props.cookTime,
            name: props.name,
            ingredients: props.ingredients,
            directions: props.directions
        };
        this.editRecipe = this.editRecipe.bind(this);
    }

    // editPrepTime(value) {
    //     this.setState( {
    //         prepTime: value
    //     })
    // }

    // editCookTime(value) {
    //     this.setState( {
    //         cookTime: value
    //     })
    // }

    // editName(value) {
    //     this.setState( {
    //         name: value
    //     })
    // }
    
    // editIngredients(value) {
    //     this.setState( {
    //         ingredients: value
    //     })
    // }

    // editDirections(value) {
    //     this.setState( {
    //         directions: value
    //     })
    // }
    changeHandler(key, value) {
        this.setState( {
            [key]: value
        })
    }
    render() {
        if (this.state.editing === true) {
            return <RecipeForm />;
        } else {
            return <RecipeCard />
        }
    }
}