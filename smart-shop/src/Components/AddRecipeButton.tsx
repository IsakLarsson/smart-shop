import React, { useContext } from "react";
import { RecipeContext } from "../Contexts/RecipeProvider";

interface AddRecipeButtonProps {}

export const AddRecipeButton: React.FC<AddRecipeButtonProps> = ({}) => {
  const { addRecipe } = useContext(RecipeContext);

  return (
    <button className="add-recipe-button" onClick={addRecipe}>
      ADD RECIPE
    </button>
  );
};
