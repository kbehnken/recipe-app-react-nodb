# recipe-box
This app will allow users to create, edit, read and delete recipes held in memory

## front-end checklist

- reset.css ==> eric meyers 2.0 reset
- package.json
  - main: server/index.js
- setupProxy.js ==> 4000

### front-end file structure

- src/
  - App.js => class
  - index.js
  - App.css
  - main.css
  - index.css => reset.css
  - setupProxy.js
  - components/
    - Header.js
    - RecipeCard.js
    - RecipeForm.js
    - Read.js
    - Edit.js
    - Add.js
    - Button.js
  
  ### dependencies

- axios ==> make API calls
- http-proxy-middleware

## back-end checklist

### back-end file structure

- server/
  - index.js
  - controller/
    - RecipeController.js

### dependencies

- express

### API routes

- Get all recipes: GET `/api/recipes`
- Get a single recipe: GET `/api/recipe/:id`
- Create a recipe: POST `/api/recipe`
- Edit a recipe: PUT `/api/recipe/:id` {body: name, prepTime, cookTime, ingredients, directions}

#### example usage
```js
app.put(`/api/recipe/:id`, (req, res, next) => {
  const { name, prepTime, cookTime, ingredients, directions } = req.body;
});
```
- Delete a recipe: DELETE `/api/:id`

### data

```js
const recipe = {
    id: Number,
    name: String,
    prepTime: String,
    cookTime: String,
    ingredients: Array,
    directions: String
}
```