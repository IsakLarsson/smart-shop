import { ChangeEvent, useEffect, useState } from "react";
import "./App.css";

interface Ingredient {
  name: string;
  ammount: number;
}

interface Recipe {
  name: string;
  ingredients: Ingredient[];
}

function App() {
  const [recipeList, setRecipeList] = useState<Recipe[]>([]);
  const [ingredientList, setIngredientList] = useState<Ingredient[]>([]);
  const [ingredientName, setIngredient] = useState("");
  const [recipeName, setRecipeName] = useState("");
  const [ingredientAmmount, setIngredientAmmount] = useState(0);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value;
    switch (event.target.name) {
      case "recipeName":
        setRecipeName(value);
        break;
      case "ingredientName":
        setIngredient(value);
        break;

      case "ingredientAmmount":
        setIngredientAmmount(Number(value));
        break;
      default:
        console.log("case not found");
        break;
    }
  };

  const addIngredient = (): void => {
    const newIngredient: Ingredient = {
      name: ingredientName,
      ammount: ingredientAmmount,
    };
    const newList = [...ingredientList, newIngredient];
    setIngredientList(newList);
  };

  const addRecipe = (): void => {
    const newRecipe: Recipe = {
      name: recipeName,
      ingredients: ingredientList,
    };
    const newList = [...recipeList, newRecipe];
    setRecipeList(newList);
  };

  useEffect(() => {
    console.log(
      `RecipeName: ${recipeName}, ingredientName: ${ingredientName}, ingredientAmmount: ${ingredientAmmount}`
    );
    console.log(ingredientList);
    return () => {};
  }, [ingredientList, recipeList]);

  return (
    <div className="App">
      <h1>Hello welcome to recipe man</h1>
      <input
        type="text"
        name="recipeName"
        placeholder="Recipe Name"
        id="recipeName"
        onChange={handleChange}
      />
      <div>
        <input
          type="text"
          name="ingredientName"
          placeholder="Ingredient"
          id="ingredient"
          onChange={handleChange}
        />
        <input
          type="number"
          name="ingredientAmmount"
          placeholder="Ammount"
          id="ingredientAmmount"
          onChange={handleChange}
        />
        <button onClick={addIngredient}>Add ingredient</button>
      </div>
      <button onClick={addRecipe}>Add recipe</button>
      <div className="ingredient-list">
        <h2>Ingredients:</h2>
        <ul>
          {ingredientList &&
            ingredientList.map((ingredient, index) => {
              return (
                <li key={index}>
                  <p>
                    {ingredient.name}, {ingredient.ammount}
                  </p>
                </li>
              );
            })}
        </ul>
      </div>
      <div>
        <h2>Recipes</h2>
        <ul>
          {recipeList &&
            recipeList.map((recipe, index) => {
              return (
                <li key={index}>
                  <h3>{recipe.name}</h3>
                  <p>
                    {recipe.ingredients &&
                      recipe.ingredients.map((ingredient, index) => {
                        return [ingredient.name, ingredient.ammount];
                      })}
                  </p>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default App;
