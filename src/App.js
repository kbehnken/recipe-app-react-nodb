import React from 'react';
import axios from "axios";

import Header from './components/Header.js';
import AddHeader from './components/AddHeader.js';
import Add from './components/Add.js';
import RecipeCard from './components/RecipeCard.js';

import './App.css';
import './main.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: [],
            adding: false,
            filterText: ""
        }
        this.getRecipes = this.getRecipes.bind(this);
        this.addRecipe = this.addRecipe.bind(this);
        this.editRecipe = this.editRecipe.bind(this);
        this.discardRecipe = this.discardRecipe.bind(this);
        this.setAdding = this.setAdding.bind(this);
        this.filterInput = this.filterInput.bind(this);
    }

    componentDidMount() {
        this.getRecipes();
    }
    getRecipes() {
        axios
        .get("/api/recipes")
        .then(res => {
            this.setState( {
                recipes: res.data
            });
        });
    }
    addRecipe(recipe) {
        axios
        .post("/api/recipe", recipe)
        .then(res => {
            this.setState( {
                recipes: res.data
            })
        }).catch(err => console.log(err));
    }
    editRecipe(id, recipe) {
        axios
        .put(`/api/recipe/${id}`, recipe)
        .then(res => {
            this.setState( {
                recipe: res.data
            })
        }).catch(err => console.log(err));
    }
    discardRecipe(id) {
        if (window.confirm("Are you sure you want to delete this recipe?")) {
            axios
            .delete(`/api/recipe/${id}`)
            .then(res => {
                this.setState({
                    recipes: res.data
                });
            }).catch(err => console.log(err));
        }
    }
    setAdding(status) {
        this.setState( {
          adding: status
        })
    }
    filterInput(event) {
        this.setState( {
            filterText: event.target.value
        })
    }
    
    render() {
        const filteredRecipes = this.state.recipes.filter((item) => {
            if (item.name.toLowerCase().includes(this.state.filterText.toLowerCase())) {
                return item;
            } else {
                return false;
            }
        });
        const mappedRecipes = filteredRecipes.map(recipe => {
            return (
                <RecipeCard key={recipe.id} recipe={recipe} editRecipeFn={this.editRecipe} discardRecipeFn={() => {
                    this.discardRecipe(recipe.id)
                    }}
                />
            )
        })
        if (this.state.adding) {
            return (
                <div>
                    <AddHeader setActionFn={this.setAdding} />
                    <div className="main-container">
                        <Add addRecipeFn={this.addRecipe} setActionFn={this.setAdding} />
                    </div>
                </div>
            )
        }
        return (
            <div>
                <Header setActionFn={this.setAdding} filterInputFn={this.filterInput} filterText={this.state.filterText} />
                <div className="main-container">
                    {mappedRecipes}
                </div>
            </div>
        );
    }
}

export default App;
