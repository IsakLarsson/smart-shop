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
  const [ingredientName, setIngredientName] = useState("");
  const [recipeName, setRecipeName] = useState("");
  const [ingredientAmmount, setIngredientAmmount] = useState(0);
  const [shoppingList, setShoppingList] = useState<Ingredient[]>([]);
  const [chosenRecipes, setChosenRecipes] = useState<Recipe[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value;
    switch (event.target.name) {
      case "recipeName":
        setRecipeName(value);
        break;
      case "ingredientName":
        setIngredientName(value);
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
    if (ingredientName === "" || ingredientAmmount === 0) return;
    const newIngredient: Ingredient = {
      name: ingredientName,
      ammount: ingredientAmmount,
    };
    const newList = [...ingredientList, newIngredient];
    setIngredientList(newList);
    setIngredientName("");
    setIngredientAmmount(0);
  };

  const addRecipe = (): void => {
    if (recipeName === "") return;
    const newRecipe: Recipe = {
      name: recipeName,
      ingredients: ingredientList,
    };
    const newList = [...recipeList, newRecipe];
    setRecipeList(newList);
    setIngredientList([]);
  };

  const handleRecipeClick = (index: number): void => {
    const chosenRecipe = recipeList[index];
    setChosenRecipes([...chosenRecipes, chosenRecipe]);
  };

  const createShoppingList = (): void => {
    if (chosenRecipes.length === 0) return;

    let addedIngredients: Ingredient[] = [];
    chosenRecipes.forEach((recipe) => {
      recipe.ingredients.forEach((recipeIngredient) => {
        const index = addedIngredients.findIndex(
          (ingredient) => ingredient.name === recipeIngredient.name
        );
        if (index === -1) addedIngredients.push({ ...recipeIngredient });
        else addedIngredients[index].ammount += recipeIngredient.ammount;
      });
    });

    console.log(addedIngredients);
    setShoppingList(addedIngredients);
  };

  useEffect(() => {
    console.log("ingredient list: ", ingredientList);

    return () => {};
  }, [ingredientList, recipeList, chosenRecipes]);

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
          value={ingredientName}
        />
        <input
          type="number"
          name="ingredientAmmount"
          placeholder="Ammount"
          id="ingredientAmmount"
          onChange={handleChange}
          value={ingredientAmmount}
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
                <li key={index} onClick={() => handleRecipeClick(index)}>
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
        <div>
          <h2>Chosen recipes</h2>
          <ul>
            {chosenRecipes?.map((recipe, index) => {
              return (
                <li key={`cr: ${index}`}>
                  <h3>{recipe.name}</h3>
                </li>
              );
            })}
          </ul>
          <h2>ShoppingList</h2>
          <button onClick={createShoppingList}>Create shopping list</button>
          <ul>
            {shoppingList?.map((ingredient, index) => {
              return (
                <li key={`sl:${index}`}>
                  <p>
                    {ingredient.name} {ingredient.ammount}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
