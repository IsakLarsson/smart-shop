import React, { useContext } from "react";
import { RecipeContext } from "../Contexts/RecipeProvider";

interface AddIngredientButtonProps {}

export const AddIngredientButton: React.FC<AddIngredientButtonProps> = ({}) => {
  const { addIngredient } = useContext(RecipeContext);

  return (
    <button className="add-ingredient-button" onClick={addIngredient}>
      ADD INGREDIENT
    </button>
  );
};
