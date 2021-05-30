import React from "react";
import { Recipe } from "../interfaces/interfaces";
import { RecipeListItem } from "./RecipeListItem";
import "./RecipeListStyles.css";

interface IngredientListProps {
  recipeList: Recipe[];
  recipeSelector: (index: number) => void;
}

export const RecipeList: React.FC<IngredientListProps> = ({
  recipeList,
  recipeSelector,
}) => {
  return (
    <div className="recipe-list">
      {recipeList.map((recipe, index) => {
        return (
          <RecipeListItem
            key={index}
            recipeName={recipe.name}
            index={index}
            onClick={recipeSelector}
          />
        );
      })}
    </div>
  );
};
