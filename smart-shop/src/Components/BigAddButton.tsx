import React, { useContext } from "react";
import { RecipeContext } from "../Contexts/RecipeProvider";

interface AddRecipeButtonProps {
  variant: string;
}

export const BigAddButton: React.FC<AddRecipeButtonProps> = ({ variant }) => {
  const { addRecipe, createShoppingList } = useContext(RecipeContext);

  return (
    <div className="centering-div">
      {variant === "addRecipe" ? (
        <button className="add-recipe-button" onClick={addRecipe}>
          ADD RECIPE
        </button>
      ) : variant === "createShoppingList" ? (
        <button className="add-recipe-button" onClick={createShoppingList}>
          GENERATE LIST
        </button>
      ) : (
        ""
      )}
    </div>
  );
};
