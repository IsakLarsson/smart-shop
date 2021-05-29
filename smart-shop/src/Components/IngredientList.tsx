import React from "react";
import { Ingredient } from "../interfaces/interfaces";
import { IngredientListItem } from "./IngredientListItem";

interface IngredientListProps {
  ingredientList: Ingredient[];
}

export const IngredientList: React.FC<IngredientListProps> = ({
  ingredientList,
}) => {
  return (
    <div>
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
