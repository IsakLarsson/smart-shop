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
  recipeList?: Recipe[];
  chosenRecipes?: Recipe[];
  ingredientList: Ingredient[];
  ingredientName?: string;
  ingredientAmmount?: number;
  shoppingList?: Ingredient[];
  setRecipeName: (name: string) => void;
  setIngredientName: (name: string) => void;
  setIngredientAmmount: (ammount: number) => void;
  addIngredient: () => void;
}

export const RecipeContext = createContext<ContextProps>({
  ingredientList: [],
  ingredientName: "",
  ingredientAmmount: 0,
  setRecipeName: (name: string) => {},
  setIngredientName: (name: string) => {},
  setIngredientAmmount: (ammount: number) => {},
  addIngredient: () => {},
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

  return (
    <RecipeContext.Provider
      value={{
        recipeName,
        setRecipeName,
        setIngredientName,
        setIngredientAmmount,
        addIngredient,
        ingredientList,
        ingredientName,
        ingredientAmmount,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeProvider;
