const recipes = require("../data.json");
let id = 4;

module.exports = {
    getRecipes: (req, res, next) => {
        res.status(200).send(recipes);
    },
    getRecipe: (req, res, next) => {
        const {id} = req.params;
        const index = recipes.findIndex(recipe => {
            return (
                recipe.id === +id
            );
        });
        if (index !== -1) {
            res.status(200).send(recipes[index]);
        } else {
            res.status(404).send("Recipe not found.");
        }
    },
    addRecipe: (req, res, next) => {
        const {name, prepTime, cookTime, ingredients, directions} = req.body;
        const newRecipe = {
            id,
            name,
            prepTime,
            cookTime,
            ingredients,
            directions
        };
        recipes.push(newRecipe);
        id++;
        res.status(200).send(recipes);
    },
    editRecipe: (req, res, next) => {
        const {id} = req.params;
        const {prepTime, cookTime, name, ingredients, directions} = req.body;
        const index = recipes.findIndex(recipe => {
            return recipe.id === +id;
        });
        if (index !== -1) {
            recipes[index].prepTime = prepTime || recipes[index].prepTime;
            recipes[index].cookTime = cookTime || recipes[index].cookTime;
            recipes[index].name = name || recipes[index].name;
            recipes[index].ingredients = ingredients || recipes[index].ingredients;
            recipes[index].directions = directions || recipes[index].directions;
            res.status(200).send(recipes);
        } else {
            res.status(404).send("Recipe not found.");
        }
    },
    discardRecipe: (req, res, next) => {
        const {id} = req.params;
        const index = recipes.findIndex(recipe => {
            return recipe.id === +id;
        });
        if (index !== -1) {
            recipes.splice(index, 1);
            res.status(200).send(recipes);
        } else {
            res.status(404).send("Recipe not found.");
        }
    }
}