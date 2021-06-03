import React from "react";
import { Recipe } from "../interfaces/interfaces";
import { RecipeListItem } from "./RecipeListItem";
import "./RecipeListStyles.css";

interface IngredientListProps {
  recipeList: Recipe[];
}

export const RecipeList: React.FC<IngredientListProps> = ({ recipeList }) => {
  return (
    <div className="recipe-list">
      <ul>
        {recipeList.map((recipe, index) => {
          return (
            <RecipeListItem
              key={index}
              index={index}
              recipeName={recipe.name}
            />
          );
        })}
      </ul>
    </div>
  );
};
