const express = require("express");
const recCon = require("./controller/recipeController");
const app = express();

app.use(express.json());

app.get("/api/recipes", recCon.getRecipes);
app.get("/api/recipe/:id", recCon.getRecipe);
app.post("/api/recipe", recCon.addRecipe);
app.put("/api/recipe/:id", recCon.editRecipe);
app.delete("/api/recipe/:id", recCon.discardRecipe);

const port = 4000;
app.listen(port, () => console.log(`listening on port ${port}`));