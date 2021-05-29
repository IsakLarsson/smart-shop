import { createContext, ReactNode, useEffect, useState } from "react";

interface Ingredient {
  name: string;
  ammount: number;
}

interface Recipe {
  name: string;
  ingredients: Ingredient[];
}

interface ContextProps {
  recipeName?: string;
  recipeList?: Recipe[];
  chosenRecipes?: Recipe[];
  ingredientList?: Ingredient[];
  ingredientName?: string;
  ingredientAmmount?: number;
  shoppingList?: Ingredient[];
}

export const RecipeContext = createContext<ContextProps>({});

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

  return (
    <RecipeContext.Provider value={{ recipeName: "hej" }}>
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeProvider;
