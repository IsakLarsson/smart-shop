import React from "react";
import Pizza from "../Icons/Pizza.png";
import "./RecipeListStyles.css";

interface RecipeListItemProps {
  recipeName: string;
}

export const RecipeListItem: React.FC<RecipeListItemProps> = ({
  recipeName,
}) => {
  return (
    <li className="recipe-list-item">
      <div className="list-item-image-container">
        <img src={Pizza} />
      </div>
      <h4>{recipeName}</h4>
    </li>
  );
};
