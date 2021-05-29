import React from "react";
import { Recipe } from "../interfaces/interfaces";
import { RecipeListItem } from "./RecipeListItem";
import "./RecipeListStyles.css";

interface IngredientListProps {
  recipeList: Recipe[];
}

export const RecipeList: React.FC<IngredientListProps> = ({ recipeList }) => {
  return (
    <div className="ingredient-list">
      {recipeList.map((recipe, index) => {
        return (
          <RecipeListItem key={`rcpItm: ${index}`} recipeName={recipe.name} />
        );
      })}
    </div>
  );
};
