import React from "react";
import { Ingredient } from "../interfaces/interfaces";
import { IngredientListItem } from "./IngredientListItem";
import "./IngredientListStyles.css";

interface IngredientListProps {
  ingredientList: Ingredient[];
}

export const IngredientList: React.FC<IngredientListProps> = ({
  ingredientList,
}) => {
  return (
    <div className="ingredient-list">
      {ingredientList.map((ingredient, index) => {
        return (
          <IngredientListItem
            key={`ingrItm: ${index}`}
            ingredientName={ingredient.name}
            ammount={ingredient.ammount}
          />
        );
      })}
    </div>
  );
};
