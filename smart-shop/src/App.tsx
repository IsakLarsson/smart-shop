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
  const [shoppingList, setShoppingList] = useState<Ingredient[]>();
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
    /* const r: Recipe[] = [
      {
        name: "köttfärs",
        ingredients: [
          { name: "vitlök", ammount: 1 },
          { name: "gul lök", ammount: 1 },
        ],
      },
      {
        name: "good ole chicken",
        ingredients: [
          { name: "vitlök", ammount: 2 },
          { name: "gains", ammount: 5 },
        ],
      },
    ]; */
    console.log("Chosen recipes: ", chosenRecipes);
    if (chosenRecipes.length === 0) return;
    const res = chosenRecipes.reduce((acc, { ingredients }: Recipe) => {
      ingredients.forEach((i) => {
        const idx = acc.findIndex((ingredient) => ingredient.name === i.name);
        if (!idx) acc[idx].ammount += i.ammount;
        else acc.push({ ...i });
      });
      return acc;
    }, [] as Ingredient[]);

    console.log(res);
    setShoppingList(res);
  };

  useEffect(() => {
    console.log("ingredient list: ", ingredientList);

    if (chosenRecipes.length > 0) createShoppingList();

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
          <h2>ShoppingList</h2>
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
