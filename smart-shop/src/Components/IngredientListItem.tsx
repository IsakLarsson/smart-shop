import React from "react";

interface IngredientListItemProps {
  ingredientName: string;
  ammount: number;
}

export const IngredientListItem: React.FC<IngredientListItemProps> = ({
  ingredientName,
  ammount,
}) => {
  return (
    <li className="ingredient-list-item">
      {ingredientName} , ammount: {ammount}
    </li>
  );
};
