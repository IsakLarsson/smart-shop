import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { RecipeContext } from "../Contexts/RecipeProvider";
interface AddRecipeButtonProps {
  variant: string;
}

export const BigAddButton: React.FC<AddRecipeButtonProps> = ({ variant }) => {
  const { addRecipe, createShoppingList } = useContext(RecipeContext);
  const history = useHistory();

  return (
    <div className="centering-div">
      {variant === "addRecipe" ? (
        <button className="add-recipe-button" onClick={addRecipe}>
          ADD RECIPE
        </button>
      ) : variant === "createShoppingList" ? (
        <button
          className="add-recipe-button"
          onClick={() => {
            createShoppingList();
            history.push("/shoppingList");
          }}
        >
          GENERATE LIST
        </button>
      ) : (
        ""
      )}
    </div>
  );
};
