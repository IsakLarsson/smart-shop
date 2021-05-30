import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";

import { Ingredient, Recipe } from "../interfaces/interfaces";

interface ContextProps {
  recipeName?: string;
  recipeList: Recipe[];
  chosenRecipes: Recipe[];
  ingredientList: Ingredient[];
  ingredientName?: string;
  ingredientAmmount?: number;
  shoppingList?: Ingredient[];
  setRecipeName: (name: string) => void;
  setIngredientName: (name: string) => void;
  setIngredientAmmount: (ammount: number) => void;
  addIngredient: () => void;
  addRecipe: () => void;
  createShoppingList: () => void;
  setChosenRecipes: (recipeList: Recipe[]) => void;
}

export const RecipeContext = createContext<ContextProps>({
  ingredientList: [],
  ingredientName: "",
  ingredientAmmount: 0,
  shoppingList: [],
  recipeList: [],
  chosenRecipes: [],
  setRecipeName: (name: string) => {},
  setIngredientName: (name: string) => {},
  setIngredientAmmount: (ammount: number) => {},
  addIngredient: () => {},
  addRecipe: () => {},
  createShoppingList: () => {},
  setChosenRecipes: (recipeList: Recipe[]) => {},
});

interface ProviderProps {
  children: ReactNode;
}

const RecipeProvider: React.FC<ProviderProps> = ({ children }) => {
  const [recipeList, setRecipeList] = useState<Recipe[]>([]);
  const [ingredientList, setIngredientList] = useState<Ingredient[]>([]);
  const [ingredientName, setIngredientName] = useState("");
  const [recipeName, setRecipeName] = useState("");
  const [ingredientAmmount, setIngredientAmmount] = useState(0);
  const [shoppingList, setShoppingList] = useState<Ingredient[]>([]);
  const [chosenRecipes, setChosenRecipes] = useState<Recipe[]>([]);

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
    if (recipeName === "" || ingredientList.length == 0) return;
    const newRecipe: Recipe = {
      name: recipeName,
      ingredients: ingredientList,
    };
    console.log("adding recipe: ", newRecipe);
    const newList = [...recipeList, newRecipe];
    setRecipeName("");
    setRecipeList(newList);
    setIngredientList([]);
  };

  const createShoppingList = (): void => {
    console.log("creating shoppinglist");
    if (chosenRecipes.length === 0) return;

    let addedIngredients: Ingredient[] = [];
    chosenRecipes.forEach((recipe: Recipe) => {
      recipe.ingredients.forEach((recipeIngredient: Ingredient) => {
        const index = addedIngredients.findIndex(
          (ingredient: Ingredient) => ingredient.name === recipeIngredient.name
        );
        if (index === -1) addedIngredients.push({ ...recipeIngredient });
        else addedIngredients[index].ammount += recipeIngredient.ammount;
      });
    });

    console.log(addedIngredients);
    setShoppingList(addedIngredients);
  };

  return (
    <RecipeContext.Provider
      value={{
        recipeName,
        recipeList,
        setRecipeName,
        setIngredientName,
        setIngredientAmmount,
        addIngredient,
        ingredientList,
        ingredientName,
        ingredientAmmount,
        addRecipe,
        createShoppingList,
        shoppingList,
        setChosenRecipes,
        chosenRecipes,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeProvider;
