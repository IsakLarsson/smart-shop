import React, { useContext } from "react";
import { RecipeContext } from "../Contexts/RecipeProvider";
import { ShoppingListItem } from "../Components/ShoppingListItem";

interface ShoppingListProps {
  variant: "crossed" | "uncrossed";
}

export const ShoppingList: React.FC<ShoppingListProps> = ({ variant }) => {
  const { shoppingList } = useContext(RecipeContext);

  return (
    <div>
      <ul>
        {shoppingList.map((ingredient, index) => {
          return (
            <ShoppingListItem
              ingredient={ingredient}
              key={`slitm${index}`}
              index={index}
            />
          );
        })}
      </ul>
    </div>
  );
};
