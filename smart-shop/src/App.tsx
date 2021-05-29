import { ChangeEvent, useContext, useEffect, useState } from "react";
import "./App.css";
import { RecipeContext } from "./Contexts/RecipeProvider";
import { AddRecipePage } from "./Pages/AddRecipePage";
import { ThemeProvider, Button } from "@material-ui/core";
import theme from "./theme";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { HomePage } from "./Pages/HomePage";

interface Ingredient {
  name: string;
  ammount: number;
}

interface Recipe {
  name: string;
  ingredients: Ingredient[];
}

function App() {
  let hej = useContext(RecipeContext);
  const [recipeList, setRecipeList] = useState<Recipe[]>([]);
  const [ingredientList, setIngredientList] = useState<Ingredient[]>([]);
  const [ingredientName, setIngredientName] = useState("");
  const [recipeName, setRecipeName] = useState("");
  const [ingredientAmmount, setIngredientAmmount] = useState(0);
  const [shoppingList, setShoppingList] = useState<Ingredient[]>([]);
  const [chosenRecipes, setChosenRecipes] = useState<Recipe[]>([]);

  const handleRecipeClick = (index: number): void => {
    const chosenRecipe = recipeList[index];
    setChosenRecipes([...chosenRecipes, chosenRecipe]);
  };

  useEffect(() => {
    console.log("context: ", hej);

    return () => {};
  }, [ingredientList, recipeList, chosenRecipes]);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <AddRecipePage variant="first" />
            </Route>
            <Route exact path="/home">
              <HomePage />
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
